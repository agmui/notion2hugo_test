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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRL7P2A%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu%2BXOGwM1u%2B6iknjB8fY%2B3w7nrxDinEszq%2FKJSpwCZjQIgD4RneStE1%2Bt35fv%2BpGEsoR4UI932Px6qpLvQHAiF8isqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzKyGWseun38iR8lCrcA1iEW6Gz6pqNo%2FR9BN3hf2VFSTIx%2BLp0SU0eCvWtu5QP5rlAWc%2BaUr%2Fu14%2F0vKCr4r5Ol%2Fe22VV5UpVxqlML7jIH%2FpzX0bU6RIs5GO0c3i6MNat14g5mex3xM9gatYvIZ8huqLcUpVf2JydfmkVb8TmgjmJowDgQNHQODcfK%2BVg9vMHwo3vFCIMcpZ5y5wc3MZ3knMFPia%2FOgIGoEWVLwx%2BnL7BWNTkR1YUKZhKFYLt8X7%2BfZV7WLfXkOBAVcRElbScvLzIAGGvoqmJ7w7PBnSMlEAnChWUd4eiXTYMAT0PY4IqTaigibmUeznxzdPb7LGWn2lO%2BMSk4ZTG69Rir%2BfGeCKJ6O7u4zo16QDxQGfcf0wt%2FkzrBMArYHPSQ2v7xbqUjXh8lvaVx7uggJQZL4lcBmof%2Bw%2Btm9VmfK%2BjiT33AK5Cu7C1oLL%2FfyN6J7x4eGV9w2iG%2BTIcc%2FnQdcc5WMkp9GLzw6czE4zyxnp1gYxzhX52YC0Umc%2FZgFAwVHxMWcLZJPWbezqDrMCwfm%2F9NYTWctdzP2BBsMIPY%2B4nofG6oo%2FfEYW9rVZBGwZ7ziKYD5FKfE00HtZT%2B3Bd8%2BQGEtos5kKKx1mnFe9XIVH8D7hdSNRfki46EuRYEe9vrMOT468MGOqUBohUYxLtUZfOq7YgNo%2BPfX3Q3wT8oZEJ1xgtvcuOrVCAszT3oyy47gKRW22wR6SDRMFdImxRlrnqWu8AbGDdUUqMkDeePGEWBDsiO209fPvOM1JKQXevn7iS8UpPQoBZkNwEq%2BMLNRSj3YQPc%2Bwd6UIjt0pxw6LeeaELlUd45tdNHBtll4qhQNyNf75l3pPyZRQzRwWarVn%2ByQ%2B9lEx3IPcMUcmG9&X-Amz-Signature=c786004ab7dbdc18d36f1d2fe5cae358306c258a7a7a4a5b60d3b8338a1eae11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
