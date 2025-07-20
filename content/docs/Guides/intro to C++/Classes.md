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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAOKN6NN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9c9lkmhDSV%2FxE0yr7yUvyBwm3U3uIKEEqnjUw%2ByKJwIgdgaPjmzHwAPQaosVKs46XhVjXxuEaaMou4S9yZ2QgysqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6zUSeFZKZ%2FSyMEHyrcA4sP1UNtMQr3lf2S7caBFR5f%2BPXasnW%2FnKKT5T8KZgBomBo3Ai9c5JUyg507Pdr7bE1CnDjuFVC6tcCrhF2OK4rpvNll%2BFVNHVFAZTL%2BtBuhPjyKHFtzTDFCtG5yxdamMBXBWLCQh6CGoXcOM1iQbI3UHGfHVYp2xrP9hS%2FDup7lBMzpHTojilUekLEqJdMW4qnqVCTKNYmVTqagGmAvUGnYNHGm7dtv6X5CcCX%2BhTJc4gBArL1Z%2B6%2Bxvt6H15gsan3czcq7%2BwvPmVe9wSqtUyW20jyqCvHao7ncci9SWMQ%2Bi7nyzQoPkZDA6Yw%2BNY9VMNRDPfUlrcSqnGc4mhahZRGhMqnLbbcn9obdrqvvx8UyO8KuwICc%2FuKwfiSETHb3a3npjvRm7Eb98cEuyQplqLPlLS%2Bc1%2FeHAs4lNZq9JM56OYfZEZABjobOBqcUR54nB131eCfDnojYb3E9gpYvFS2VvT1CEpDX4VxWFirnC3677b0Kjf1GN5vDnEcqtWBpHnJhVlZIpYVGCtIieg3bhy%2F2ebE8Jz3LdC96XjH0Z3ZMQjS3gHZpdpTHypKsn6FvMRdRIcPP1j0hvEUxM6IfQ6uJ1PTj3%2BrR8B%2BN7RRSbOKsZVVGU3DDuflgI7cRMOi%2F8sMGOqUB2VCwKQMsEC1S%2FqFtaKTv9MHTtJGEnf1vYoqL1L8qkseeC62rO35wibiWgCAzfUn9kj0FUEkjKMKLPNOwVQNfh3sCXJU7f8bG3KlQhpncWMW6lYAw1G%2FD9p%2BUSNeq%2FBt%2Fpx6Zf2q4eSi5dwbMDUwRVC8WamavuQRgF2cU9X%2BYgAnkr%2BoXbRzeVS3KWhVVrZaHqa0FAE%2BcHWsU%2Fxr2rwIGPasiKOc0&X-Amz-Signature=e19ce4dc779aa0c4fcc9f0f0d091e7ea416dee6cd45a8cfb041f2b51dd85bb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
