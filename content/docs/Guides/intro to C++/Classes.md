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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFBD7LO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGoI2CKzEOG8%2FQaQvUrPH0w0A2HZuSnawDVtkJRLiGiQAiBAJ6zmaE2ay5IbSHF%2BVv%2Bjv9jcroEDI8cIOj%2FkbiqDGSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMvnu8GfU74h6GHP3wKtwDtMFGK%2B4ltFhF3vgaWI%2Fz8Tlvra3UtRGjHI9%2BOAtsmnccUfn0xf45kqdSkpXXwchrFXG9iWHruyQJFXE5AmCwTw4E2o1ZMwGQSOdQ2foLBxoBnOLVvBQ1dOPAfrd2gfnJFpwRPQLdmlZYvP0iPedAqsRdXlvIGXEbfzngfPAxNQwmifV7eihRK5DAb7lUMukVywfkbBE5%2BiddUTA6Z%2BPIzHGIOGp%2ByGY99Jj%2F433DA%2Fj%2FU2KPS0fxKgrbHLfy4biLKT0KuTPE7n3FuERj3jXve71HTW4onPf3v0sEHu03k6R%2BgCO9Q9niWyKTso3%2BoZ5pljATPMSPbIl8Fo%2B5RjQ2RLd5SMxGX3%2Bo8KWxNh4WQDdJtDx17N8NGamGmwkma7WVqI%2FFvibdksuzJpUgg4GYm1Zp1vYHihLy0XsOVYOtMcSMTZ0tnoWEJB5Rzu1TY4WSnioBZRniBuLbEPerm%2FUwzOhiiZrC9MgoYXkWHbfjoCi%2BwFmEuo0xXa8KYdxdaIcVAV8aYO6sh0rVo%2BXpiC%2FfRIbg3FFSlkPdwm33hDch8yLhP9FrB24yj6DX3Pv%2FeG6NkKbzdvhBXN7oOCckcVfzUcoAPbvJD1IYDCt6SpLdyD9%2BwaSs7kzXo5TG6kYw6tGAvgY6pgHdCB8rISFl1WJ9Wbk3P6XFWIHQFL7SArwpdTbh8qlPDTOvimuepafQvHV3BAbv5qV4T6oNJDJj3oFy%2BwyISkCE0wVZ7kon3xPcJi2VPlh3rLGF3Xg33VNBUMLDObjgZsWrhdLhcCrQ9WXrUc2tOyn6Kio4LD%2BMVroSJtYsb4MOs8CquVuiHuaKw3bzqC6Nz%2Fxo0ZPlhA%2BsCAcKW2mvC1Sg8bJ5tvk9&X-Amz-Signature=a1692fb6fb5fb243af484793824718b686b11d7bdd68002c5fd86862fa8ae897&X-Amz-SignedHeaders=host&x-id=GetObject)

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
