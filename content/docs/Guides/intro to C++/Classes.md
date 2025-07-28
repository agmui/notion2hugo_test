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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VJ5BYB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDrmQjyCGqnNCrHikptDV7p7ZGDgWUbBHv85Ww7C%2FbP2gIgSF7ufTKCblx0QwUw2Vts1hoQehyovhLcuJ0OR0Yb0bQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR26obC%2FmDFXbbL%2FircAzPudFEhb63LBw1OSH68Lfi0OoKulPk2pwefGGBLfBR1xMSIAu2ETRCaHKhRjhuyLVP%2BscKUJo%2BRMIQHCdSe06QttDjcyuAogi%2BfTe3nCV6iQWTsDIA358O2t9cR5uOjEwD0Tqpx4m11JonvMofTMcFa%2BH593FgfYTMDw0Pc%2Fz%2FIITkAOXmubenlPX9j5r0ycPxMzxPg%2F3M5twkPp0jIJvlAQpF1kLR%2BY7drDSF188zl%2BBKoPkRyLdAQDF%2BzQ3YJWZJdtqJ9xB8jQD4Gwqj%2F5LuD5Jjij8hMYwnvwMvXM8K1iMHrL8pEGFqnSen9%2BRNeb2kLaCuQ%2FFQ3eh%2B5cfzE3vpllIvqxEIUKeZ%2FaSAWZaafa0yE4F7yoQdHgNE1eFxNh7oyYFB3kARf9Zpb%2FHsHTe3%2BU0pf0uMEXcptEA8JM4HRnjEtpw1BL9xvI%2B%2BPi8ttOzdEi5R3h86Dv7SwwhPal6xKlLFcglD0CAmh5VFmL7RDbVBMyk1I2Wu2vPjwdS4H2MDq2FmNjDi5OGa36rX%2BzLxUdsKIXVbWgjlyDNoHg9M5DqsQKPgwFiqGrIqRWQQhB4FajBmhGM1KK67uFX1mYYE4sJhuRxl41%2B1qB9xm65rOBSR2RJFhf7OZJWomMKOPnMQGOqUBlf16YGdd652Tao7%2FjV4BBRL2w2plyHroeVMyi1QhlFnQpU7nVOJ1QnwySuDOvLPT7tRrwC245IprsWKBgEfi0XaBRhu12lb8cSa%2FgYU6QrQxNodzcu3r6ENf61clRiK7L62KTd%2BAUYdMkDrz7QZ8JIkU2WSGlF3G7SogYw28TZOkK9%2Fnk8gGS8d7m9hM2ZRJDsrrSXRD%2Fwy7u4kzf%2Bb%2BIJCi8q0n&X-Amz-Signature=40bd49f365a45e22ece7d0abe58f75eb77c7bf9dbac2014d5e313e09b741e2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
