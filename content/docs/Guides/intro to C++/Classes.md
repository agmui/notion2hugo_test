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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3WF3GZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQuP0df7%2Fi6KNf%2BmmwyyfAOi9fvBvjlVAuuwG5ZuI%2BaAiA1ooqlI%2BPcd%2BXC8vh7rWO%2BlHnk%2Bq0SsPYaQKox%2FhZlByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi4WxOm6AS%2F74qJlRKtwDx3jKRCGrixz6VRtPIhSs2L9noErID1tNXyskRyW6%2Bfw7kholjZMNGTmYTeFB%2ByzEdtD36ZsPYH886k3fVRF0HR%2Bf47EIKLrcNuounPz%2Fnj3NKZMd03KGl3kRU47FXfZ5VjWKDrHxJcRew5kPUYRfnByfV1kfJv3nYk92j1GsBV44JJV4VJLeiweaqB2AIiWnDg9wo%2B9egKKmOUCATiAigErZv%2B9sIYnXbJUKqvBqAs4accllH0x243cE3wUv7eqxp%2Fhq38ViTWVJZG%2F00Bnm%2B6H1KrJ2UO6PZ59b3QKz%2FI5RdnYbZQLw%2F4wDe4VK3h69Fr5qcl3lAYejKOf2w1O5xb2oNMPGVEYsXi%2FbBMWvVaGyx6SKjE8JWBDpeMWmf9JgP6VYaLEICGdjWPBvcQIXu%2FflxzlwxL51AofwWarhNP4gGUCm%2BHrIZSqNBG5i%2B%2FS3MFx2qWH6EOYE4y2CbpYKY%2BvqdxilBjE73isTFmweHq2GoqzA7hJnHYA7ZaK%2BGyURlSJcKW9qvuqcOJY4SXElEyaIFK8iqAezpLc1fgKkZXB2RWO9qczZUK1%2BjeG0BLviCVsRhUlsa%2BbbZR7dxMw7jnmDyKN2%2BJl6HaWrdJqoE%2BN5o4HqunmcKeJov7YwtLGzwQY6pgF5mO5k7qz%2FYcjUHoI4OI1fHDpGW0Rwj%2F32u6m94YHWq1%2FKW%2BfBluVOvAGQLuVksMmbArWnm3AU8ZldgKiX2ga93N35KO7QLpj0V6aKN7l2b375sf7d5ikLtKcFjt6W%2B0X9nEYv5w0F74n4rwJ%2BvvtgaZKqVwATZQEs4vTtajtiUEZACH7l%2Fg5u5qqNdIUlhopk%2Fqh5IFh4GRYltVadI9Ro4Oo37IA8&X-Amz-Signature=eab1822c0376edab63b59e9d432c6db2dbc4ab86e6dff75d90ea9ad3be3b68df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
