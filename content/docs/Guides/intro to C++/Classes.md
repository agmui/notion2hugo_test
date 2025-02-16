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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623U5LM7B%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEV1Ic8sA7AgXgjkK7knPmk7m%2B%2BnUB0A3waGXboXKCwkAiA2Q%2BPpErf9l1oTBKSuRn%2FhrDgFWb94zGKQDBLhrp%2FeTSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMpFj48kBy0qMqDqRgKtwDoARSYuRXabME8zwueRcffgc5mUUb%2BO7c6EHhVMRIt%2Bo0wLNRUhhLS1rDJJ%2Bb%2FYnC0B4oimHX4Zoyf4JkVHU8ASsyzMQ3giVi3LBCf1qr8nc13aduNkRrNmxYHd7WdJjIj%2F4e2cMG53VqJhQLH8McfHWDFsJ1FyWwP16t5qxzrBIJulerxJYcQmOc0ew3umrlv0y0%2F5sc8LGkkeni%2BMnGpvGFocGg8K%2B5bCFmS0H2t5unnPxEGz%2BluKus6PY8HDwDyrYYoLcr%2B8Tw6tZM9F9nztrkDRL5fEO4KcBbJ2GGGaBFqCJtXxlCyr0ys01rEXfC5v0aNOUKmiS6k%2FGGgqwerhGDu48%2FqrELZ2FfnehguD52cERKw3zMHbBNXJli2cHICefmnMSICa9UBDrT9ICwFak%2FyrQcBI2lYtZlHY5IgM0i03P%2F1lksnF5RhO4PieVByimcr3NhmDKWYQVeJfiKsmanWUKy2eW4QOdFdYnIwjHBXd1NFqsLjDJWha1IbhWScsRJeHOQ2anfdNV8cVeiE1yIXBwerJKdOTu9nJPK1kUBwyn5HvUKgwuo8jtJpapBenh45hF%2Fd4Us0x714AZDZ7hoxf6M4fzM1g6lybH7vxMUwGksFMUBr24U%2BQYwxaXJvQY6pgEoRoPNXnMglycYE%2Fwv3EkK6fbSx9jQTVDVPzuhENR1lHE3A%2F5isk6u6okWOxT261VLo6%2FPDLZphNf4cUpUldxsIzPf3tQsTORWcXeeRRh0Yu6JU7KwyuTT0qsMMofdtMpn%2Ftzuq3h%2BFhyzExrBT2KI0Y8%2FhX7oBjbHXhxhVhmmlCpQS7a2mCcFBVKjy2D738tjku4vcjjP42YUGfeexbZzZy2OQAoB&X-Amz-Signature=69eb15467ea6db406624c755696f931e4a6f9fd49b76a58562935b29309135d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
