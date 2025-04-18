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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665427AW4P%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvMY6ec41yWE9FxxV%2BYpLSSjG0LF1Hh3Xncg664mm1QgIhANX%2B4%2FjO8H3zd6hIF%2BoqAbF3ZfaCROwAFIlsN7ZmQZcJKv8DCH0QABoMNjM3NDIzMTgzODA1IgzveBUjVJlh8aAj%2Bvsq3AMmIBaVFbWE1t56d%2BWiSG2g0qR0yaS%2FXCz1EQcc%2Bi6kkW%2BX7F1Y80E4KHpYR%2Fm%2B8zRS0uyoEaDSnezjBh6uIZK69F%2BEogZSdJZoI%2FQC%2BsXa2ab4IEsqrsn%2FGEwIn1X8lYvJTkQ48Dj131%2FbqSQdIRtKuu8p3vLEkR269HrdE2sGoQQHNFW7zpV3rqj2qpxnFv%2B2IWp0YU3A1DqMg4wKDF0%2FGDPweHz6%2BpO0CKwVKcFnlPutFAGGDiAzHThLEw2H4AwkJwcaq2xNQpkIzklFmkdmv87pjnpDTaYy%2F7IdJaDAzIruHkSWrpA03hmh%2Bg4FgfjKxFp3bezyWFJ0QYoXze82p7MI4BHlcWaPRwemq3x1zCzuNPm2uL%2FFtK4zv2osVMOmyvQDWR1ZiQe9wrhHMXQeObAhD3SwZEDHRik41zwjkzV7CGUa3XJFSB9D4GyGsAtepMHVhaiitaREzhHsIflZrnItoA4gRpu7SIpKJSFEGhqocSbu9QkjY%2Fe%2BpitEitcB%2F%2FkesiN1G8u3FoClXqfA1%2BBWMILNob3%2FCJWbIWfVuGqX84Kc3dGUEbFgbcQDK%2BlEEREdERaUJkteh9lKQ9vkclPNtGPsVK30BYjDSKyuRqBlforV%2BcGHz%2BNTHDD%2F5IrABjqkAVLStskYlah7NsPwh5TaDkHzyy3e8NzhPJiC5z6ZMTDH7XcYrLYR%2FNIkZIWAMZ68VW88wRTkkjcijURDYAr6GzJiIF6QlUfKZWxKtfrUup0Hg7BU72bprSHc72wVIH8OdYAA1DKVuANSTyOAH1GCPl6Wsk9ytvyR45QaLA6BGx3%2B2adMSKQf7fIQcvxU%2FoiEYUTmEABCR%2Bdzrnp0O1DIQ1JUDkF0&X-Amz-Signature=9e2f894ef578286e61f45b41e24f8f7197bc3352a994c144885af1bfe3901b93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
