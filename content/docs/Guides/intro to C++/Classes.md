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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JSQUIKX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV7npAxNkb34lQuTfeoYOkpmxfY2ZYF2RcVSiFZwPpYgIgfUP9p%2Bo0e2s89T3F15pvAk%2FIDCj5TfgMFQFkPJJ6CYQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg8KDxlB6BvCVjTwircA8Ycbw0qFbx72zINt4v1pmKEYkhOUwgmi0VJGBQcioWdbu%2B9Gz%2Bo6g5or49KT8rYL06nXVhcOgI8jBtZkirgOOsyHnKUdi94ZadyRGXTqGuq%2F8gfkbW%2BXq6NPQIpy3Nk8nMBcuXmpaexelYWg4U6T4oWGkz2bJa77TZLfzt9ZK8IxhVecaaZcZrL80HvdcqQH0dK3q2jQiNWJ4c9ZI%2FG6EQb4REgfFe84%2BOoHftWeroyFLzjPFa%2BXbwzyU7J1R0ZecpskUg%2FuTAozVHv%2FuoOXXkCF9o6UpnYbrntk3A1mc9sbQAVo7GtwTKe%2BLip5gDAqT80%2BKvT10GLYKBSQkkG7Vny0bGCRlK7JtaFp1hyQ4Zmw9W%2BVO25C%2Bv5l8PqQ42IHaO2SVMyd3p4KU1ApTKOhaXIr5ZhIoeggysLXT4FveWmgnOwXj46oasZaa42l0sILBHUl8h8PvOTGQb1o%2B1eK%2BK%2FuU9u3HhZG5lTyzlRqEXnYFwU9clR5yhNvZC0H5MNaqhVQ0O%2FqI7VvP1SAd6aoHv7qJ8nBxnqXh0DN4%2FvuVhcOrlB8Et8Oq4xRhQ7wLkuiH3TdW64LxYERUZ5otTooyrrUQkAdBRRQCXvIJuKRy%2FddUOFniyE%2BMuKSDcoMP2ztsMGOqUBVBUlN8S7Y8nU5HK0JvAvA7zp54aCInkWgCB%2FO7KOE26QGTAZTQQJZCJEyS0Bjo4yw5PVd38Uk0hlpdAFEjQGZndgdLUJp0LcL93GKCqWYI8t18pRTMu0gEfCxThEj%2BiPZg1VFkvJx2D%2FzG%2Fzj%2BMtmBlijsn79y%2FdVjVsos3RcSuFH1XxnpBWaSe0fOF4LvnmRmYQ8t%2BwS4Bu6ZmMP7dmmCvnLZ7b&X-Amz-Signature=948c3856f4680724e7806adb8612ddef6cc2a76af693de0ca1d02e5bee0d16ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
