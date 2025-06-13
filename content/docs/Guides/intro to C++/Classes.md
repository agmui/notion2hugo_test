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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ZGYTAB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH7Q2ib%2BVMJbWMdNE0q%2FFZ9Akcelq%2BRP9Q2wnE6UqUhQAiAiSEogLC0TxT6uIOiVsn7XVw9EAK6guHmkJLJsdonlcCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoYBjLq3%2BqDftmsKHKtwDQpBxoiA5uA0ynSlWFmHVb4lVq6AbfMVyn4NMdhRs0GL5VKzcoJQdx3CBt1leoyCGnJWKZoCMGrD9og4UZe2JddzTju0eECVeEUeGEHoKeiwgac0ZBSfZmpWF%2FaRyiR6i2KD9nKiiyoysaw0LSDlZkx7jXaz9wNkJtBtf9S%2Bgsdg7sDP6l0X%2F7Asgqiq50%2FqRhHxRVWLksre1bBcI1IC386nbZ8byizzdX%2Friss9I%2Bq8lSiWgDspCuAUhWvUUQopHNTdNPsfnRsvyFu97rX70XRwu9JqzQ%2FVPUWRtoINk6VVcA8HS8wf0N4A6pZqqIDhixCtqEYWUznw9CU7H2NPsEKrACAOSx6w5EngRHnLSmKVINNBFCrlv7skakvPfEQ3krrWFYN1EZ1IKMmag0lXGqhJucEanJqIFpWIN2XC7qzq%2FMl1JpD%2FnBIKVUqWKkFZwXCgF7%2B4gX97KhebIdpZ0c%2BVeMOzmLAeKVzlF0jZ%2F0bjOAkbo89kI6eBEzEAIpdLEKDBtyijlbIacR6KoBIoepmQeNhewhIltPJu%2BW1YYwmU3TiUesvPDwLrfgS91ZPpvVIS23ILqJDP0nld7%2FfAsXTajlcuYboXW2Up%2BuKhCIimd8YQa0NTbjvAD%2FPwwuteuwgY6pgHTC%2BaZ7UvNTgMOm%2B%2B%2BxFKwEnwOp8CX6D0a%2BgsCD3LHfw34%2FL90ZA5RQlBJ%2BI6S4IJRuS0AUGn7xvd3BPE0bnhqnU2iwlIvJrsme%2Bp6rzsL4py%2B5KY2R%2F93DhflSZ9q8GKQd39AFhraROk3IRyluHuYByG7niXB2XLprFtbdOwW02DphV06XABD2GJqMO2TavYxyPeTRdDToO0BP2fvWiT38SIzEqOQ&X-Amz-Signature=8801c977908849e59476e2f05484b22aeedc626e3fcf80021edd3686284fafad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
