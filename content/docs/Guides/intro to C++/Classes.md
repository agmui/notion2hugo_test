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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVK3KYUO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExiY3T9jGgdbP%2BW4sfLVB5TocMxqBxmFTyyKcGTlMePAiA2BvEQw2Phgb%2BkdyT0aecfyZ2j262T%2BN%2BHPRXzEoht%2BSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMRIqTobMN3vzIfTKtwDtt9ydeCyD1ZnvPFh4uxepK49UlF9K1L%2B16toBh06IhrtncvbvSkm2nbXtqUQFsThU3RkWZIv9FRR5hEizmOJ3jXD9QQtwvWiKsxtoyf3uUQRVTUJnDwLk8j%2BKtTvdVh0IZoBbeUQNpW9i4WESL30FFT57jzgGCiA3iZCcNwR8UQsCFSajNV5YQ8kpKsBhYSlzgJM%2BrG%2BqG3whstG8GT6lZoYz3lhzvdlTrdddHP0yuJicDxaWExrYDQT%2FH1VyDy4iYc%2B5G%2Bv4yMVwr7HTa3k24X5GS7Q%2Bwn2Rmu4J2cHrJGsVmRm5MWOeKYj%2BQZtQDHZb25PLY6HJgVFyvF0HwnciTWC7fAXv3XrIXdEl1fB5IitkSLR9h%2BDC0Nphz%2FXmM1eFNFXZQtdN5vW4qKLpuf%2Bbj9F6ow0gG%2Fbau24r3ivKUj1WuYKcWW%2Fn6PcD3QxNCnyjaYR30BnbzOjuModjAJ2n1i2u90%2BOL3kEGXMH22felGklPzve5bymG3jdwVPVNlTuYmztujnyegF4S%2FNw6A7mmg5G7OhEmkZP61rlnPGeAY4bKcdugqX59cRbpdbb9ofgvQRwWdYWzt%2BiYFAb54T0caOvw7S7ZAqlRhyWiG2%2BiM%2FvE6FX29p2ISJLsQwgbfKwgY6pgGxC9IF405BCrl2s3lESG0k%2B8nMLHRp534PdlQJXgnPIyTQ0AywRO2zgYb%2FK6I2iMLu4lt0FWPDhWNhKRt7FEhXVS2BrvU0K5Xkyxs%2BXOr4eSGi5v3%2FNSnJtEpfpLdfCHSajIMtdaMXkO2q5lnf0j7SueYtg%2FBsZqhGescgfKqQo4O1bOJtzLsdlh7Ud9BqD9ojs9lOder6nCsas7At%2FiIQxvoEEudC&X-Amz-Signature=d833c709174f86d9488a4537510230c5d136207a9d53e2b65f29dae4874a42a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
