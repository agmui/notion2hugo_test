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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3YMH6L%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbTM8JnK%2F8BFIUuXONwN1r%2FLKrUcfHrU%2FIgd3q8aL%2FygIgWj9IPqmnaE8BGf%2FV278FVGxZ5HHwcXvq1omOs2z%2FCxkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDA4Qac1Y1CL9gQu2OSrcA7yCPTgOACECNV03Sy8DaWYh18cDM%2FhRJoNlrQqJNF9FRg6rOQ9J7DH4lqcvdEO4zkBrZoQTc8Sd6zS%2BNkKbFQr829bxcTtVojnpVYdgykfK9u957d1p3BvSMYgifzRqhpQd%2F5rHKFTtjFi7G6DNpmKmCtxiK0Jv2vGUgpZSTLviwwSS2qm6BRFa4%2BDf7%2FNhgRA0%2F6nSwTfMp3nCXswcp%2FCUyMveltHwIKTsW%2BRoywzxmOPJ8NiuyQG1q%2FgKpabdUb5kWHb2gVjt%2FQeG3MzgcDAfm%2FusyS0b5s1se0QewAcUzmbBNgOUPM4ABV18aDiB1qJ%2FuDOe9ARhd6%2FPzR3hySJVjd0LnKW0EirMw8RNEYLMuO38r19ZSKlksxf0h8L2LiFEokUrUo07pa4NOjO065mY8I%2B%2Ft01CLgRJrm4cSIoeeAI%2F4%2FUqxf1kRk6ypyrCHn2eAfKGVsUaNiFLYlXIykd3aeA2ZCbZAInbIwmp2WtIfoiYWJ08mhmb5Gt6A3Ea08XCCff2umPFEAVPYJHZyBTOFsncG79AhA8SZwNIGzC%2BYQ4C7mhPddKge9wLkn8Pdu%2Bc2SsqLE245bVzLp%2FXz9gVs1C8fXYy6%2FJUcdLl6S4O1%2FOZ0ZT%2FY93f55JvMPulm78GOqUB1VJoPn%2Fie2HSI8roMrkQ6JDrwlXjFniuGcNcCleU%2F6CqM40ZqJ%2B%2Bqg4d6rQRex%2FmxYiz6XJgRMkG2Uq9ZmHPI7ECirrRsIH%2FzOthAuNklRqyufc6TBfj9HAHmhArGEGLen%2FNhdrUhY0%2FsEy0HgNHGPqRsl1GBASowqHgpFb9epOs0BWF7JjqoEgZm5irvw4T%2Bwc50hObV%2F5MO5TpXYBE7zssxTS7&X-Amz-Signature=d951938b49baef5c4114579a33d2e22a210d72a8a6837e6d43ca74b1dc396440&X-Amz-SignedHeaders=host&x-id=GetObject)

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
