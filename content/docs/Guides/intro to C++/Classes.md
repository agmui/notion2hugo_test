---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZZ6VGA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEBnOBtkU2HnwecJXRVHBZczs%2F%2Bi1gGvb6lTh0sgQeUHAiEAs807LJj5c2DLgiZPsY1P3uJVlyRqZOwn%2B9U%2BRXog0h4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOYJNHZWQDGcW6XFyyrcA3pzhmrQvrr3SZr1yO2BzsgyaXbgmZ9bY6xJVCGpy33UV0u5qaEzEGz8dtVPPLAZ2kVYSkf5yR63%2F%2Ft2psAhyxmUienvsG%2BWzu%2FXP6Lsp2AvuXZgXWEu8WlosMSKCFoy89%2B7GcemTaLKfZwWFPXDVydhd2Dx5DTKZXAFVfY6wJXS6GWk%2FG5vC9fBOOMFGFsf0bFHQGOjj1WH6QhKkgTx%2B7ejSGjET4LyUsfzJ6r3pgvEa3c9OFXxiJZ5Y6he9I5HQLO6gnYUyyFwjgMmTnejtJLi2H4sM9zdA25E675VZnz3FjA6ZAuIj3%2Bk7g3izgQVbZLK1hdAcVM5r4QnjMOkf2d0TWzw7GHGqBcCFnLeBHtnyOStF1I5zV4bej%2BH5Tvx6r1MojIwku3jsavOotTj3jsZ7E2%2ByC26gpudGlir27vueGgcX0gntL31iYPL8LNBlmQ9iV3OQX7OHxYW7zLnx%2FZZq4G754ZkvxCfjtXsZpd1Z2XgcwcakpAZQrIFzfWd24HxckYSmz9rQzFNPjEO6lNduni2R9JmaTarXFi%2F1gorqo1Tvba5irTeMcyo2AoEF%2F4pZLyn9ChRhsi07zSUlZmmADgh2W835UGvO27370qDOfS4%2FmzbyKGmVrLtMJjeqsMGOqUBEUUYk8cQTz5Vp7TdujMhI4HIGhDnZY%2FvKD6DiGO0q7qVQl82MAKS8b8oicChT%2B9OY5PTEzblLAFi9tQNIVflZYyzUQoIUMbnxf%2BeR4kL4%2Fo4la%2FXgbMrExZbhvvcXhlcFlMbminzXmAByKXqTMTW0bCybxsNm45eS1zsWCnwOlyFH46QF%2FoUfFYU0fRD7nOs4GHH1GEv6AXR7HgZKdmNhFkvPIqC&X-Amz-Signature=aefaa5e66af72b8718376aef7787e73fb7fb5405f5303951056f48b5be933a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
