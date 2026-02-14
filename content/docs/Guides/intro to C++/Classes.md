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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSO4RSK%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDvRu9ncVKBIhTrRKuXmNXUqyPXzHc7y8O1BFQO7tphsAiBMo5bAg%2BIan8LTkg3vyo8gUD5AygXUJhle%2FESf83PI6yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhBov0zWm2Vp15rhvKtwDBnwrPkPxzxS0ORjPDPMkSQ7Zl8aMDe4ARCR6QKoGN1of3A4DN%2Fe7GPb0jTQ%2Bo9vv%2B7bKtGuG6HwCwJgi5P6D%2Fi5NLWmqAd12Rx3bD0pwKJjMHXlxHlsmCBxsZ5Bv92qVn%2BBlUqczo2vY8laQKDE%2FpCMb5Cf0uzZQzXc4hSs3XhCAYsXZOx6qkX0MvwzJz%2BNJxRDJw1bJPNAKhAwf7YsE73Gcopxm4JNAdmxJXViSNPOE3CVNEdjW%2FGuG%2Bhrj18LXDNk9m0DyBM0uh27CCP2Ud5Ih1fyRMFYTIDk%2BtV1gHFzMznBMpYFaTHCY4rj6RsbFM0e5NHPdhvOQ864J1zibBt8r4ObJZtOpzniyEE66g5UILa0cjdcMFxJAA5dTP%2BfGf3MlccK4vB%2ByIQD4usFpsE1BH8YSWHawHcR2YblAGCA8cSTmRnybxpCBVAW2u5jhSzLNsFvyl1W%2FGpeqDQ4Zgis%2B9GDc7rByaPlbaBebt6J5mx4qqzqQhgDpIkefW7vaGi1ARkJnM3cnawfoX5okLuj6okVMsRyRUr5agm0DOZnrsuY%2F1xS0Yn%2BO0bV3CH%2B2SNKJJHSd7RT2jd7XhJ35MSdriItOjmsrxiRGQ8j952zj6uVyyEBVMx4bGvEw2ZS%2FzAY6pgHQdkNMaMYX4%2BZsb%2FttaH52TnhN3%2BZYqljpP0DNB0pF7GZopctegVRNh9E7NRyhYj3iTKxkW4cLprwL4C9AUsw390TPysdV2yfVWoR6yED2K6p0%2FTVv90YX44JYzUrhlUD4xBf0ZRTaRtIWk4xOZlz0nIW4vsssihAtkSvNT%2BBlLOxjHpCOmWw7JGBJrQksoQ30Wx5Qp5FlKosNj2fYNi0ATyn81S4W&X-Amz-Signature=c091e7847d6f1ea3e3c0dca020780605428151bc5fe9900ff3515e2ed9dca59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
