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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNJJBBZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQHbZotYu7myLXm2Pv9bpSQSwqDS00gF0FYVZP79TojAiEAmPd65a0yUqoVPMjFdTnUIp%2BF2HBuulg83VEKYwNZeS0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0WRHHFA9W4%2B9t5nSrcAz5yEBp1vITOMayQG2VaQd%2BxkAGscVqXHA1TgiySvE4B1t1Clv7a0EGtXF3yDVjgCgTttpySpgEYlQy7NHKjvw550WlfM1%2BXntpJNKo%2FBQgJUugfFV1h7wuXzfHJna%2F0rdoox13pXvZ0vNK7DFRmYhvUgQfoHVnrHfrxcC77KS3i6wqD7dxuPXgKgU3iNjUEPBEUYVvXSZpxbjx1uHuQ7hoI6ReGVHugYCS%2Bqym5Au76wmcVJvHBTFmolpvik8soNWJBLMufgq4xH0tQRrKx%2BxXkhOArNzP13Di1YhwCJagxU07%2BXUlAUslgJLO6%2FcK6clYD1BS6dJbbT%2BDshlgWnUvd%2BZ22Oy2MlCvsSDWGIDlhM6uXqnnNhtHbANZgZukC7heYr0OB9omBCdWfcttK34yTIZPDpQtyV9v0K3UvMteofS%2B3j%2BKcUX4TaEC8lo%2F%2BZJww%2FgQcTK9Dr%2Bwsx0egAbh7qduwwtDjFn5JwoYOL2fPEEsZOwzff2GYZyaF06hbHOtmNiw1TubliiHCr%2BqKiMVOx6kvG25eYd02KpQ54pd6fBo81X%2BJ1AZ0nlN1dxhjsxZrNauw8NqQJ8NT8T%2ByVTnx9MLu6FqyMz5gfuV60MTK%2BSHEnDZ%2BfBvK1wXOMLLa6r0GOqUB2aRpcorS%2FckgNC9Fe2zTOqZzaUwj%2BA59%2Fi7NFpdwdlrd%2BlgjpRMv4eUepdxWTP7bsGCrKVy61RfDGj7Pb%2FymTRVpR3q5jT0rB0vDxtbAejEablC2a%2FP5dHV3F30pcYLEWleS02qDEgQr%2FSXCK1MgqtSujx2uuQSUozKBz0gDLNQtmOrkuTtfhxNoSpEdiPmvrQ5ZvilnGmUXHWXysAPD%2FHbOAxze&X-Amz-Signature=53bd433fb98d6dd8dabea64dd9d06d4d79724e256ea0ee8ce33973638223852f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
