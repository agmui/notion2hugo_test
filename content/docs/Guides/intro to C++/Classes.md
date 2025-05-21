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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644SOPAEC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDPmKdSyoIIQiODDUyd3sPUUmZiX%2FRbP5Mzz0LZDRAMVAiAiXbv1E8qKzBg7%2BlQWskSMMHEqBjfE3edIYZotbPUY2yqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM873hkAsa1B6g9fVbKtwDF8nCoatghRRVPvuHg%2BxyKNvGfHCLNII%2B1YRr745jS650IcWNfauIWgZAC0nKV8aD8%2B%2FBOHDGkr4Suv4d89Od2h%2BMv39QEB2Lr8TSH1nt%2F64XQS59ZJ2YTohoYc2IdHwU3GCgXaiHQrQlpAyyCLGFyAdCMYg1WvO2XUfve5iwOXl6Y1%2BKEiYvN5v%2B4vA%2BpKWubB%2BX694tLyDaeiTPqOIel3kcx0rOF6%2Bo%2BbaAHbNeZEgKtMdsob5QvgORXLQmkS57T354q%2BYSdDXrivAFndWxGYI19ccgdroG4oM19%2Fx39TLcz426o56dFa%2F3RM5PEySZs%2FkSutc8JqgAOFg9I9caKMHcXlYouiPbJPYsPrEWM5Is4EArclRrvE6QXau0bkM7mKX7d%2BYcDB6vNs2gn93c6yZoW8Tc%2FJouOr2RBnWpaIm8N92jS0SrHNWq7j9sJNl2IiBsLdVNuYwUGdaGhaRua50AScLaQj6%2BqaczyIfuv5tJqOfyRc%2FzeszdXlkCz6l92C4pMxqdg%2BmfFjZI0ZZfG3qbqp4DNxTAqBPq801zz263Z0OL0T9eKlBBZEZ6s86Bw5dZrvUF7z0g0f%2FLMHTA5t%2F3yUKwucqJh6y45xjU3VXE2jvb52JE8cX%2BJIAwvdS2wQY6pgGiDscfJyQhAprbPkGcwh4jBBfpkJIPsp8hLgeqAsUzmXg%2B5YaOXBG2jg%2F96horCF8b8tpBYrtd69gtxJ1CtyBaZDS5OBEzMtljGeuLUGcfZXcVdHF%2FeYKfbiTw1wMJvxr2M8Tz7S5f9l9RSAkasikKftbFC1jGkWCsDpkRVXUtX8aMDGrIF33yw2adP30kF59lFvhnaFPofRSTlP0%2FuLI7w2SMLIwD&X-Amz-Signature=5ed60d115bc5ed0863f09cfa9e007d170bf0b8dba6948ae521f22764daf98c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
