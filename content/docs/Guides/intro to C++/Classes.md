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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFDYNZZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDE3f13X96y89t26wvkrR8OS53zK1aWlRrV0D5NUrsQXQIgeX9dqG6%2Bwomvx3tduMxKjH6x8yeDWecRi13bIGYiHFYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5qZutrKujZJ3tRXircAyPGQ8gzWGwSYAHxyLJU3qw4ZyFiCerVGnxJlWzsTpjKFY1xJAS4AoYqbewQ%2FpTujUVC%2BGo8wo5SGi5GtfrLHhuHNVwb9RShlIc3aJa6cpczRp5S5zJEGu%2BsnKuLisU3xiMKO3bMPqG4jm4nBucfpQKFWABZA90g%2FpITz5vyA%2FrKvPcXye%2FAtfy%2Fndri1jxyK5N1qkYoiQxogSm21Uyr4Npsx5QKILX9%2B5Tf4piCdRBUrxvQgpJwd3F7HxCjW2BYlxjC4DP7DavvyjYkV4qAnxj%2BK10XCxgkU1wOZTNigUdunDYx%2BzZGrA0yOVC7ROcX5fv1qEPlIsyZca08Rk9jh9yvMOeO2Ii2h5DoRBJIri8%2FIxq%2FEqk0qF%2F6%2BFBHM0vlrLPH1AfXKkVKCOQManOkKlAVVyrZtTt0U3qLnoExHxBe5VpuSp6RGY9HbYa1xtz8oyVaztE7qMoOemOB1YrsSkeKIPMHDGOnTA1bmtnunAvBEslzfVQOj8BmLRCL%2B1a3AvA2w5eLZFb7dCBOUk9Hm66NvgNLPX5N7Vz2JXfQpXGgHc%2BTTSc9vDiu0SY2hFnfnHuoh8COiswHq%2FwbNDqlWEuHL3AW4tMynat2l2LEBW1adVyY4fNoTCWBQdE7MKCVjL4GOqUBrvUAyr0yjmbtDSv2Mb7a7OoQ9r%2BQsnDCjXs8riaf2CDic5CE2ubkrvt1%2FuVDqGyTIqDsYXsAm8usQXGWY%2FBZKeL5ItOMp%2Bot7MRPsNGwPpgFXwWQi7Eq5E3qlBRh3aCbunizwlTU5rbGqd1oCVJxwThSS%2Fs3z8PRoK0rKSRoGgOs2lqmNYtu97KQNxujjKZVsMshO2Xi274Zj4bvLlRciAgdQ7fU&X-Amz-Signature=cd288a359ff6213e1d6a680058e8913b3954571a34d5027cd42c179ec8bbb01f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
