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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4IMTJJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzFBTmvJRT8iRSM6eBw%2B5O8uhQTBeFR4CumL%2B5otdD8QIhAKs3yNfOyRj55QEuLXgdnngH0Rxqud78QrR5u%2B0cUzrrKv8DCHoQABoMNjM3NDIzMTgzODA1IgximoTiK1y601T7i2Iq3AOc7K%2BoatO6GefZIOwtcRCt4aDBOnf%2FWB3NPsHlL2dcvRJJWZBxQz12EluFkYOwCSMs79DAoAk5Lc2uF%2Fr4r4zB7sDi1ocutKsUd9yzT9pgopXB37gXnthrf1q0UUiPQLtKs22NugGmi72sqeYG9T6emsshIUhkPYJDtgbn1hj%2BV3NOJeC2dhSEVl7m3cr%2B49kv35v06RAmrsYNuECRboFCsO8P49%2FYpj5KMIcYlg2AwZIzzdEMKz6kIDLCa%2F7DIB1G2C7Gi6Oz4lVkvqOoXos7BUglKOT9oCRJqmBAKEQZGOfu9kNfqXCORxrOqZkR%2Buu52PZ2%2BpxJFAK9%2B8Xhhju0Ozl%2FJrRnu4Yy0xZqdFiI7EYQwLdANuPqOhOKo3GZmqflG55cV6I462AcjbeAWeeZab5UNOQJGFptJoSvXVE4C1ui7rU8MQ8GRavXDhfoVhrKsFDQ2SblyamOwsP17PSibEMFw03BX0hktN%2FcE%2FeBifZSMUg0Q81vfAC5rlDGrgkv9kXpE5fcJhfEr9QoYUy6B%2BxbMbKkxbLK0so%2Bl8UeLH4e2ok8xL14%2FQvtNSviSHzX6%2BTUHasFMGj%2B7tL1v6AZ9mLzxBnBPbETnuNrUFnpLuJU31dwwaSm2rnGMzDyo%2FvCBjqkASe4S4OyO31Ozf4QBtX4vzJfwtlzM9YGnJGSfGSqw6BhBemrjzcmvQHTBMVeD4bXWzzHOrifQ7kbIrP6zo1AT4LYHNv7masF4TRs51Byceje3rExbh%2B4dGmgf215bsk6ikySz%2F1G3Hk1d%2FixKl5zfwp5oaQ3GyaCJih8kfolqp5SPZH3X0rIEJU1rci9oIJsIiCYykTdyfFvk5i7bWmgc5YTMeQ9&X-Amz-Signature=8bd68dc0da188b0d6ad4ceaa8d78efb21d433e76beeae746477edebbc6b92913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
