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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY6XUE5Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2HlXDKK5%2Bsf27cDR9uWkRBkPS%2BIaVQjcXpyqmonvLQIgE90j3cqP1nY16417P6f47lV9ji4X1ZHgQxJYh4k%2FWmAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh2HC4zUfKUaQmQ0CrcA%2FUmHrotjPy5higkYdgMbKE90KBW7gyobTwqA3cC6cCDicvKYx05EWULCoevHHvrVscz3xWjPk9Rfti9qz4i00y%2BNnCW4d0DMtUZa1V215SUxDUSltKSoCRXLb97glAUKF5ZVaPBwzrtkiYDPo8Rzl6yqzjj%2B8Dfwz11E%2Bc%2Bs0TzX83XCw2A%2Bl3qhsF%2B0uLkTr7zRfjqkR6KZPxWHujxKXfTHbX9FnEsQfIHz6YR8kwDqmhcYCleg4Mt77IdRQd8YUrCTGTfD2XS57L7SJda3OOpViKQKpdwe%2F9B4Cw3qB7gEVwI7HQ0tjTSfUtL4aUI%2FwjgMQrwUtVlm%2FsFGdLSKsJTze%2FkCTAYSYJ9jg4vP8EJVnvgRxA3Dgzayn7W%2F9TXUbfmJfi0OIpFTcCTLouReO48ZLwsxoeaYuqXFVVHgnQGTsAWaLblSobhQTL7Nk%2FMVCCRs5YPyItzGhiabARdE79Zqhg91qJsp8yUCXCQiH7mIgMqqHLVF6a1ywIXw2Dj6YRKEe566kInL1xhmouoGM5s1tAoKmHXUKF5aFoxwiDXHCgeZOa4nWa1%2FWeBKkK9a3HGQs0IGN%2BJcEOTbQz6r5u83VG5oWiqgpcD72YRVY1bBfjCEEnkcehD9qUVMKivp70GOqUB6PuLD2K3WGU%2BgOFaMNUs%2FxIv2cNLavUHEuNDmwTVApkMRTJupsvosajbougZDnq5zqdwmDYIhwOZM1pFQYBnlFwtMG38Ud9zMNwlkqVEf0rWKAEIgStTi7nZ6s%2BAqSNygkQDhqsuJ%2BQ1Z4LKI5PmCv8MOY66jxUpMLoAwLtwomAsdKkdjAhzlm%2BAHBVpIkwD4ioDSZ7zbiMYbJYckeU4zyW%2FLoh3&X-Amz-Signature=20f262ba9f05752afc42cbf134b04f056d23dd7d30622500d28e1350bd2039b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
