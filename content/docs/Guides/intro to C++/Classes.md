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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AMPEP6O%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1b8WmeA0dzuHz%2FN10EVFxXnLWCg9cfIHCzfxym6g6KAiA%2FJXs2j98ewLmp10EcuSheWZUprmJReW8OKtOyk53jtSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMHz0uyZhB7xk%2FH2F4KtwDHs4Z852iX%2BZdi0jvZ6U84vgcmMpWESad%2F1K4uSnlTT3O8%2Bb07Oeql7Ucm82pGWRsvPcu7dIL1nbCCo4Pmwjw8wDESwUiKJe4US7bCAa94IxJQha90lZQyUjVUs2G4E%2BWLWWUMNPw57oqsoJVQZBkHfy%2BAnrTF8NywYGezXs0%2BLrLGdid6keriuVG1VSk600GT2io1hB7FuFHt9i%2BCFQ28dY1QEcOUNadA0NGhsEsuYTzUMTqkFw1zoQ0gIDS9gd%2FHlLCO15Lg1FpUDZgiFNkB%2FUxzbe35KQchxmyXa9bUBABlz1HESGnBypZOcFQweW4dwLbR2RQueziFhNxsNQnkJQE139E1qiR79xGpc4kYUBAthllTiZ0oAOAz7rCs0flFzFnaPw216dLNMVcnYYCoBRLngVQWaW8QQ5i5kNsMMJ9EuKWcYGwRMnSNNThZWYuSEJsDu4a0GxxOivLQQpJIgHfaAJWkLaHliAlKWuHhki4K2oJXIMO50CVeCX5NuqKbEzB6%2BbDOAkDfWk6eUijQK3IQaHCZyZALV96SDxiQSB4QtDEosgr1LQqZATerRSIkfsJ9UqVNe09gHkn6Ulngn4iZjUBQegyF9WqEnp1KzDHyFDmyDAI3XwibgEw8%2Ff6wgY6pgEZQqA0YuNsa3NFkejBaChFTuzELb0a2ueWQbLDCTiiLH%2FQ%2B0SdOYo7OUTQaoGFSfAcy%2Bly5%2BlpW2TnZTbrONNtH%2BD9vxpiEWnUVBfW0BWuG9NN03xSjBl42cCCKAfcwC6c63yAxagS6IM7Hf5GVJBwHF%2BHcka5pwnwrA4E2RKJEmO3sYGgpOCix6BwJLHv5WtFvS2mJIMrqQw6HPn5u3J1jEsE0jXT&X-Amz-Signature=59752b9165764ba4d37f51885079858fd30003dfeea675ccad110447be5e5dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
