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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BURIKCH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MFc0RlNljGX6u7rD%2ByIWqXUYEMjAxq9mqKsw5RI2%2FwIhAI8blJz%2FDJdQAxyd9gr5eQpxThTsHbHPCsfvHjdpwsQ4KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE08LDuNRYOQpmX6Qq3AN3MIRepOtncsBZgv%2BaRkvWrkdWsiCBZu74ui%2FuZ7FAhK1AfPF8OQDUAsgyi8V%2BiwsJsrNnsNxQXpxChsKjSerk7OOwYmrm8UpwNXa4qXoGdLlEWbqIEZlGxhB24C%2FFuTNmXCboZIWZ4LMh6OK94Ljpm6V8f3bToXGLhFc2vsW8BBJkxkkggbp2d1ZcfhMQ7laQHXqChg4In%2F1F1CjYUJ7ymylEXOwknvQGZYycm30K8SGz65Cpqd5xqGaqfb7LF9%2BoBLu89iHSfkCSZLbHP0QXroY0NXsBcxFfYOpmZYbzQfHUuAFhEdYIrXTrljfgFCnYoqk19MS7nmcLwuB%2FwfiIubfgjRNv%2Bj2F%2B0sixBbnjsEDN%2Bvq9XAdvOciWNla9xj%2FMsU8SjvPjv1TTm0E7T31Z34Azg9kDrQl6Ww581TfTb2hPrdHrL%2FPWbshTgPYVLjW4ag42c0Voxjb7M%2FAV0Su%2FfdZf5q7ekXgPgvVuKJc%2B0VC5l1qcUOQVjFEoQ9kDJYYMNokeibtu8BuLXhqFtBIiFGRK6FhA%2F%2B1JE2pqGfRfQLcFeHc0IPLsymbVxppR1dj7Ie4LwaLux%2FlnCKlJUPLmb%2Fm7yG39iqimSLLRwBagYXwUkSwgQTwyDDiPTCl%2BNC%2BBjqkAZxUQS3yFbiett%2FAL2dVd9W3TJpED0XkLgJ%2BJdV9cVTsiBnffFtSZDXAd0OBPwfvc0msTupI0ciAsZulLooYdcWbbdJwdTY%2FPL7FAvekO0DCifvFV8xo62z1uCpyry87uHt6jZ%2FGcN8WAwC19jEtzHI8NtwsSW4D9mYsnHRxJykdy%2Fud4iHkmJG7JQT3SCc8frq7mzafwF3wotGD6AFgN7eAqWfK&X-Amz-Signature=6e43efda689fa0611345442746b2d98907179d1c3334d2e457aa96508e9ba838&X-Amz-SignedHeaders=host&x-id=GetObject)

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
