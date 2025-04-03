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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IA4XWCL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH5q%2BWS1eorbAEL%2BqubS4yXiP8cUR5SIGbaol0yp%2B7ZdAiA5E%2FNdiVyTVuHdTpuNBZf4zVeeo4K9L1Smf13Wvxaf7CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSA8fUAuNTIr8PfFKtwDp83y5q0AWeueOBweUHSP7oYeMKXvjkiJQPeVd%2BfntIJU3QvNJqK2MVfYBoDswsg9BRlOrDD631O9vPyhZ2kMomcfDtMwbdiMQviUAD4ddqbs0w%2BT%2Fsf5Oko2uVfVL2fjne5W3Pncuw0GpOrcf1t8zui71%2BcJGy63H1UrakLBmgvy8VI%2F4Szqqvf9phkKC6bW9sTIE2utbwvABCKGFtDLhoSvynFl8cyf6g1ClKapy7FrFuIlz9iS95p%2B9y7h0M8ztvZ1302OM%2Bt6kGaxWGAjU4dKn7hABzcNrt8Y2RWmOp8yMGTXyvrZrzhBkcbCAHUzVynmnQum%2F0mCvoCaC6lSPmGkRGUbPpjer%2F3wiT2M4r365edHYb3sfTy3NIa0KJUu4lOCdy9HkkLcvXHN33agKpYv80DradLsIZqomkh4z1yZ3ZPDHz7%2FInlwAPcyIh6QVFXzx4HZFdXmHCbNdev3UyIRxOjMGCNT%2B8kB6ygsM1TbeArZ96Ug9na8Ag83GUxSrUN9Cma5AuUoZGt%2BWoamiHESZ0QGn4o3JviIWklGkpKGO%2FUxG6ntAKYp8vyO57A8Lq%2BJ0jDVGb5VTTHsDaR7SPxxYbHrl%2FH%2FNovCfqIedZf5q6ditWyCZmx1v5Uw0663vwY6pgG67uFnC%2FP87Vs3WTKessEyFXmS%2FU1G3GDTrdw9qA9FE6OGZ8Nf6oygV0qw%2FecPncR9HBRh%2FPxhZU5NZz1vy%2Bqjqw8BjB7Vg1hPtw%2Bo1fhWHbX5VVtAaK3IDmmeRdmWZCsFNWpSeSg05P4mcXDZKEUCoj809C0YB1UzzeVlhc0vcLl%2FOVpUsWlS6%2BeO5m%2BjKpA6dGi2qMp1HlbS2%2BaxXpprdYKwzYMA&X-Amz-Signature=14abd08580d8d6387cb3fc1b708c05b7c4ef80954ec7aa9f3848bf151da34006&X-Amz-SignedHeaders=host&x-id=GetObject)

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
