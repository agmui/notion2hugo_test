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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTUK4CW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6e6WWDbCWDdYXd6oh5apZzHGQpc9wd1b9Y%2FeP9EjWNAiEAy%2BrXiUQxJ9xWBtYmapUkwGAlPMMHXMCkG2qxxfSfEpsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcEvThPW8XqNaTZ%2FyrcAxF3pavreKRyCWQKJCVe0y%2FmrsK2KNQnuvQh8mn8mdoYCtVSzqD2fLSjN7ApCPfGpLN2XNpZPXRUygnhdp0CLiJ4TuTqbQKtCNmhXpVclHcwu591kp%2BRd%2F8B1HC49U%2BE3R4kUezLhcNKhJLV7r9pwTD516jaQVSGe%2Bvv8iBkGhuJCqcQNIBrKpto%2BAKrX%2FK6FKNKGYHDwRs%2BV8ftKc4YJBkqUqIK8PRpk3ZJTdYl09BopMOAKVwIo1IMrpX9uNvEY%2Fg%2FflaW6y3Zi%2FVp7WGpn9V6Koi2gOWLYQIFN9byHwyMN%2B0pQmKtENrlHrKPmQ3QEVNB%2Bq7fVuIUmK1YARGbVyGhznlzr0Uo9BSucRWu%2B3XfK0%2BiEXWz2uA2o1uYx95BVTKZob2Ny6btHPz2RNnnkAdnX62ykm3zbVggzLCKba%2FVki1qHhAtbz9hK3T0p%2BjgV8jXDcvvjvtyCEcR9Pz%2BXdtzqNkOoBzDt0Uxy6OvBCsIWWMrbMXr4nhGc8OkJBAMJ6imhN9phb%2F96T8440G1AiAsO9Vq58VqLGqXFBs8A%2B1siPrIaXSC0dX4aO720NdTJ%2BubXbfOGoEyULcUQcu7jBTPcgwZT%2BsHyRY2aPyjgpv2%2F%2FbN%2FHwNXaBWzRjPML6mk74GOqUBitbI2MFl8eGhBeP8VyEwjt%2BLncNxQ5%2FsmVIOXGIqJc%2BzyXYL38bnFguowRlZm%2FNr7RffEvc4UyMq56NwQAoc1Dd1cVFfDncyPL67sc6d4QtbrfkSyl8BOs0JpJgl07CMsGdoa3iZPozo9tcuXNU1%2BilHDEyE9doozm6qgcVE6NzOE8%2BrWvPknSzW2e%2Bp5EfpGF7f7OHVgnmpHSd6dROF1jlUtLWZ&X-Amz-Signature=5ed8355a2aa5cb21daa1b2b7d66630984435870498758d541999b467eb3cbeae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
