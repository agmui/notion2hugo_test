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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMSYFP4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6PGcf7nQOq%2FM5E9p0E4g%2BmL90lGXPgEHTblSfaOHMTQIgXExvL8aPkFvUT7OzapXix3syr%2FhTW4%2FfZ0oyizZ6YEwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDF8u5vsEdTs9t4K9dyrcAxJSc%2BOwXW5uPNcKLsvBpWKrSd3S3GClPCY3opcWGT8qbiqcdfW7ooAsH2StvCRAMhB0js88U0Q5rQMfoF5LokU%2BQM7IkxHnERnrUKEpi2CnCpIRUyh%2BP7cVwiPlEtheMCaxqV6Z3GzrK%2BwT7jllT%2FHfyC3zaZld%2FZZ2b752gkbd7w9pQ1E9iANCNbznKi1cgXcdbodVwssUyj%2F66%2F7eqnhWrpaKqquyxiD90b7fk%2B08oiSWjP2Wes697CjoH7qS2ZHv3iYYBDYVVghmINWreorYilhpynHO%2BOKCbnZ16n6JlRfdO7ddf5eTv9dE%2ByaI2kikT7fFslzOvp35175Fltz0h4HKuY9MSHQYHCbvIkxs%2F7OARbpcODJ%2BUwkBqcrF9Labs2OfYFBXg59iBA9LU5xGnDAPl19YEPprAgs4D9RWPIiQiEvNFo%2BKShLNoGS%2FXFFnNBY2dhNOJWRPTfawxpk0mzzOR1cxX1cICr9UxZy7FIMYmgH02T%2FoyuiLs6mrsyewMeYaMC3MDExnr584U1tb9BOSwESe0QGMlvN%2F3OiSt%2FOEIIQnIeR8W%2FLOcukTlTIPF3vvG9UeNhD4vBiW1g8M2gBn9vGXuhHHJhBWmO%2Bu5JufMjOHNzhfhktWMOybn8MGOqUBJ8R%2F82%2BXj%2FDLLu%2BgzLKdLbBcko0gwBnMdECptd44%2F8H7wGf4%2F%2BKUS3MMw44VBgDaWFqORY6umYK3GMRu1Ipti0QiZ%2FFGvHh0qFKFvgcke5zHnar84JtITR0vJg2QdUCLLGq09vsYhh7htAE7xV%2Fsq64V09Mh5eYqrP2fYeZXVNnDPbQX6jC9Wh0%2Ft3bstYeRWIucRKkriIvhWwSffzHws4yROX53&X-Amz-Signature=86dd56929a8d33b94cfc0bf8c35263de71f47a48bab34f457443ac656fb14ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
