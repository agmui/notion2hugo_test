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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSCKDJK%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhTOYvXYy4j5nzhWAKLJXZwkfYv8RWcK4Sql5dn7cQgAiBwJgTIa3%2FS%2B80hepOB6nACUINk4lAP9rxyNWlLIiHTQSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ImYrWvjhhyONqGWKtwDTtccVRetjb%2FjZnV8c60ck1rAq04%2Bsq4oWDMHBq7Hjndz6yQgl5ir4O3nbou%2BmsDnVbQWaa9GzpGMiOlpsDDLFdNrhryc%2BMliEp94bEfqnKoZijjQQqPVljOGkpPZEugpEtYZp%2F2CaBMPsKVXjOTT%2FPDdTi%2BtJnc2jT1iAPUj72B7yGoTEiCEAqhQz2xfUiPke9Gp85%2BFH9icKFHMBWHRPw7uWSvXXXLKqD00exbzqsJ2%2BlEZxd%2Fu4jaFhCwohSD4rWp6pnRlwqAMygISVpWYkT4xfo75Sa5LHubOJxZ%2Foh9qJPyF6UswSDq5279D9O9pGS4ecHV%2BrjwPFSh303de7im4tqg2bUGN8aa1ovnZ%2FODeEDv9l30wDaYDSFpSE0pkWNKt8q8C1WI0ozEyCsiJqYUw%2FEooA3Ft7iSklfhzA05ut6HnNQ6YFehLbX4qvHjy%2F7PmMa15kNIrFYIQE6zqDXXZXfgLOcYz3Ratb0J73X9af1G4WZGxnrB96d5EaNmu%2F7TH5eXdS80jduAiAJ99BMohWzzvbnS9RAj%2Fq4ANkEicCrGkk8Ziq%2BADLhHIj0HjkYKzRMxAz5FROyjayNDenYAn8pmkkTG1GBhOSdPtS67QfT4Ilg0arfpue1owxt3T1AY6pgHXNqlUWhiZbFYu35KZhYs%2FQTbJtBvdiDjanuwLuc5Y4UIaA7Zx6v6CkoHsGJmOs6ln6Iwo5P0ObqBvnIGFHLyCMpiAwyWIphGnCZVe7cEtT6iGs3N68bsnG%2F6d1BNQe4MmhF2pZZD7hB%2Bg4%2FAFvPTVrRYGs05VDwIvmrBnxoalMgRu4kFV1Qx0uogyTdgrpsg4Oz8NhxQ9h7A3YsFCBusMRCnQNVzm&X-Amz-Signature=a54cac62b1db01eacb961caae4ba42be1a2946ff83d86ab07902e6fdd473f3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
