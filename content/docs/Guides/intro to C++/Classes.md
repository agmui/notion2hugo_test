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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z475MR3X%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu%2FBTKA3efb3n49QPvSDZhV6aGYf4lsHvrGdtlkbIxigIgSPIrDgIGwl%2FdVkVpgeU62T6vWW0HBrvlOZTvWJvkOWEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSBww2LNhw6wJwYzCrcAzBoA391ceXyCH8SAXjbbA5nHD3cO2T2hjKFH44rJT%2FIfjoqwOvvxD1aNbA2Sl6fWUX2Hpz9DIyBH4LJ%2FTbk9gEqUFqtLtqgrKwfqMD38YBqFxvwUQljYYZBOmiT6h53QwFjafHc%2B2n65AGRpft8csfLu8fLqh6ShJ%2B5VDFxbANZnawzdsx2OwNsGQQ01Yo129PlmDGcNM%2ByvZaPOyjOKismsC1bn1%2BhLW8NJ7BFrnjRMOZKYwf8GyUQbNVR%2BpDDr%2B1DX8qIktN4sDbiWDK3mb%2Bm%2F6qfsagMkm5O1pulDaHeN6m1lyi%2Fcz57p4lcT%2FycW%2BYXh8piyLSQrm4nq5duLGWRXZhgNhqe%2BPegjXMbaHWaPuaCH5wPifO1R%2BCKl2YgWTXCLLs4hvlG1k4CwQqX7Kd7c3S60b7F8RoR7OP7aAUR%2FJ7Gw2ptdQZYn7xDT8sV91sY2h0dCe2ZObOQJqnzVNw39uoWwqwQTQjWtEVOS5vxScWWUUXi8TIhCQPEvw2s0Ts5AXe0rDssY7nUAioQKmmNboU%2BCEjK9s%2BBYSUzENJ1c1E6lCy9MeAZUv0WXJ7rL5QNYjR7RxNna4iDJlvnvqeYRa8eI8RMOkbLkGNIIHET%2FW%2FRq41jwzMUB3raMNiSq70GOqUBtbZjNf0yEpsyjYwMEuCyDX5Lqv40boSau5nNJCXRtg68FH%2Fp8k77oiajKFn6QJn6j6yT7RXxj6CvAaKcruYYG2jJB4%2BvVAC5SzFsUUpG1Jd3m9kKWgnkoUgI%2BNHlbVWTRixM4amHNOOYqOk0SQs5aIhRSzmoxKCde3hIIwJ4YeRD6Vk7fKuLJzYDJt1Er%2Fc3bwU8xYEbzQZUZD%2BxJQ0OjMEAfkVi&X-Amz-Signature=da411148acade23df1a2ee3fd1f004771ed1e9c617c01c4564a03782db518a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
