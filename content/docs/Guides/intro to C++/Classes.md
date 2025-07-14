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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLN5TFRP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHPZZBEUE94acDbpL4vQYRlaosKNuY%2Fk8N%2B9GuXTitBdAiEA1LrBE1WPhXsdtzMQduuBj8yuH2sadYRhItUAkh1%2Fbtcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDG8R5P76wUY58Xs8jyrcAzElcm0bAmwHGYghxhpy784HeXu35inWixIu25S1lL47Je0bkvcdFwZeHKKjQqzehL0VmYHAaBjhHOcMQH%2Fhujf4vq1U79Z62gPKBC5mBDFApNjK5zHkV1mJqdoq1mzVFt0Xo0EsYj25%2B9jYUMBr0QoYNkoCGeOamhXie2d0pxU%2FTO0D7uJGpje1oLt8xcyYJVJOv1QDqMSocNaCVJd%2B4HbNlpVAHo9beffdX92u937icTrbhXad0ySoNx0d%2BXJiHViqURM0CIDYDxV5iFw2olIyp9WT%2BNo%2B7Smx5ZU1tK0cMCOHG9o%2B%2BlNNKvpbSlh63NTQsnonWLJGN9PZYs2eKVpL6RqTLv0fz1tv6NPbFYaXPiw7Vu371qkH5Bv2z2DcEoVTtX0UegsTI1ae%2Bkc1GJV2g6Znpvq5a8zv9PV2wcuh9GOY9XTRPVrYNov6nQpQ8d8i4L5w9C5SDpNvQlaFNxJ7HoQWLzQ6Q1OPzTdAjHyj3mmPYsfuYb7kybuSdIp4eTYIRmfyOWcRfqDLkzJUP67PWmWIMpyjYhK6SCA2htcJbRNU9waBsMxlrx2T8pXPbJbZaVmhgf%2FKnZCzomZmIcyFoO6nFPih8KwZTQh5KYOAVquEnkVoHWfdvjaJMK%2BI08MGOqUBPQ7CXUcFn7cuW1WifrN63w0sIEeJwrWtwQ2O5vEsC%2BBxkM1EM8yLycgdNbo2OJcL8bk0uFfjhX716dJlUNIrXjRiTq7h%2FPJkX3AQTTkmHCGVdkCGSQCR6ove5oOgLmu6ObQ3lur7g%2FrbRn8eUVaJMe70yzQy3S2KTAWFuzbvdzN6OyYNtWa0p%2BER02%2FiFhSUxMHPWGW3QLpyK6H70AxYdksmZzAU&X-Amz-Signature=db740ade70dd56931119732e7a4132d9b74ee8a367af2021a9070d04990a6ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
