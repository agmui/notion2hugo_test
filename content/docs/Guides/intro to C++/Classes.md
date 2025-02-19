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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUIFLHU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYOJMeO6qu%2F9WvCqjW7e5YlM5g5En5trCSSPVb4dkl%2BAiBkk9zfUL0LkQhtaUob2XPzA0%2FgfR2LA9Rlvo98AuLifCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM74ji%2FYfsIK8jzmIEKtwDYPePuYX7zqsNWqteZKl8ArMOSORRg78uZxcLz7jf1gv7xCxKBvKav76Jpl6dCNpBcIT9vtADXsOyNqwSUof0AwOIPYybKjk5Gs3nv%2FB3s6cNBnICI940KXUH0x5b2iWW00Lf5MAafXZO5CaFkMDynNYollDGL7lmFwvRg2rzzsLnx2w0gDmvULW3pHmN7g60dstEHdK7aEpG9FzRkkHCYUIT4Aa5gUMD8%2B8tOeKQCCxfCE%2FHot8MAG%2FbAjzD53h2CBjGa0KcK91XFO503A5HW34mRnktHtWVCNpDSOSu4UmQ%2B3Q3v29eVuF%2F8psBQ1G3kVMzhXKbNXNZZoHIjXJOwRvDYcR%2B%2BdlJf%2B0H9MzbyfkxSkyet0iu0dE%2BsEleRxq2VBVQ9WnvfepUleiW%2BGGMjkaW4TOvBd511TxtS5XcDdqMkgzelyHfKxcmsCS6YaLXsh1NbFDXPp2crsHki8NB2yltdaokl2J54hhE59TfjkclMZx6nQSfZOKy8Hq5aQpouxkETF3sASDd8fC%2F2cLArsRdshnz3q2HwpgY%2FnB0KLZPT%2BpamjDjbAI6rbJ73E9bR%2FoH4OlRVbxN15RJR7fm1XEwRepXJRffYcD7BWObWcGytpvp%2FxgKxtgMAncwhrfYvQY6pgGnRp1S%2FVmmJGkjXyaXOGwTUZsob1JKQdD8WjS3Hhwh6h8vnmUm%2Bgb6JMuTDLzsDED%2Fo%2BQqsimRojnIixx00qfSiOl2cKOslkX1XpJm9xhY2sM1c%2Br%2FHW%2BWu1Rx%2FetxaAvJXM6ej%2FuKsAL0TZpLrd61EaGVLYX2xbt0QKRisdqIEepCh6axaF5C1pV7KPXfHvxnc6gBUvAUAHSwZeI7ULaYnuPdF%2Bm1&X-Amz-Signature=b6a1fdb6f10f888c74e775ccc2f52b85a0bdfa6bc30e5de8dd323e495b650442&X-Amz-SignedHeaders=host&x-id=GetObject)

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
