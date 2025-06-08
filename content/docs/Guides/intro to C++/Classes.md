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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQX2LG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBzTDQg4j68KisJqGLEmQmku6Lgu69y2kzMy4zGa%2F0hAiEA8ymyhe4c01x0MzlVMa0GlqoTaK%2B0cgv7xQqPYmjsrBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk7RV1hbM%2BD8srHACrcAwgER6JhwO66TFH0tAzM8cHOAL%2Fzp5pssy9rUKFTFWsdl11peGwpa6jdeOSWQYmxXmL8V0r6ciVKLGUZEJnoo%2Fvpjl%2FiHk3yAMDCNUKGNRb2dE8xEr4sj2gKkbihpiQLxInjOy9kNrj%2BRlvV7x9R9lH32AjFLRkxVmKDROT5Ty%2FE7mN4sjETKzT0CYErYXNmLmTh4zwYVmblPUXAWxXNGC4c455WCnNFEbeyMB4BFUfVjTeWgvZI6M8n3lvWZAYBn9p0IfM%2FrpxHwtTw7aPdH8c0GIOSSndBDu63ODAPpyt%2FZ4FnYI93FcmCxG2YTCmaxEccej6wsgHvVzoHB44IB6DU0RiIleegU0HERU0ijLAorJ6CGpH5xMTMdmgkkOkAvBRVfdsp%2BkVNAatL9bisESiGhjEiiLgpjrpLp3Zx5HAxj9XuQay4u4%2BW%2FD4E28HcCHZ%2FeVeyl5EybuifHjgVMaiyifHTTCLQ8qSlZc187R7J2UBqKnkkf5UEPnRuTL17%2B9wPoDC3Nk%2FNGnJn%2Bq5LvudcaCIdTRkN9gV8tk5TAGEGeg6xr0Rdn7I97hvCfDBORUbpi3FqJVVrbLlVuDiB4uPzvXMzreK%2FyLgVCnBeoqN3RjMzowZ02pIspC0%2FMIW0lsIGOqUBddVSe7s1lMQMJMwJwoWoK5sdGsO0W41XupGPzXYqOtmklzVIfcsdgmvG4OiuCPUEfSAeRTq5ReFLlfQTT0CThII4ikC4MuVlSL9UZzbUB0znKRUpzbQgAFdE9UFbObXznzqwSOkgySGsr%2B3T60U3tM3nnO%2B5c0xKtapb9fQhLO54iM6yCbFguGUVq15I5%2FhSsrmCEzJgAtRYjKoc58am%2BcEp2Wsj&X-Amz-Signature=4a472a9a1adfa50ec5af747dbba4c1ff572599a1425315991981840a61070291&X-Amz-SignedHeaders=host&x-id=GetObject)

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
