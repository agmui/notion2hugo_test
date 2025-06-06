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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIBE32E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCZfLll4ll7wFE9E2jCNEaz3O1DEnAJhaVJi7xAHYrjtAIgTeOavfvLEDkKh4xXKSFEstsw79%2B6jKwjKXLx7seRKGcq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMZKcu4SC%2BPvV%2FK73yrcA34RcVUhQLtyCqVVsty6jKMlH6UAX%2FYh9Mr2bG%2F6ZDwkUHLLLOIdkvsiJTJQ5jLHIJm4FC0PbitwbwIeTUe2u25Ri72nX5Ti0pUQKAcNSPgSbWgJ9IJwQv%2BIcIGWXMp9PL3qT7KqUm397LM%2FZJNZNMR4B8x2WmX3C7J9t07drK0h6wnEYRkVGPtcCrFzXKjEgRLe%2ByrBVPFtZKpuwbnBsVSHRLyRkG1PGPg0GCG5xWRBV6zjuDYLoNj3tLxSmgtZd9OQ6p8VHp6rkcCLHXPJ6CxPpigEKe75aMCioZnqsRjaXHL0LFhBPrn6%2Bbic37BDz0%2FxfPmSfRa2Pm%2BMODG9cCfEFH0SOdfKCsNIRaJlJ6DRZLkWNap50548wKArYlUHLZyChHLodSCLn%2BBkT2EBXr3p4a%2BPxKKjt1t%2FdD1gYzF5LAQY%2FTEuXZUrEnf8MQ8Os0F6d%2F5iwuntS05Oh9FPhaF3bvoqFOuH4Z3sNValXYtsZEWCTy67cnRgZaVsq789mvyYI%2Fqrq1GsihguWDwSrinx%2FLTnJEWlzG6WAZD5ZWOVoF7JjU8mOWX%2FojztfMOlVMkZTQmhJ8G7AxcmFYTP9GtDdjqsdrtqqpQkvUdxdP2nx%2BViAlgmUxOI1NR4MMX%2BiMIGOqUBxQsMe1URzgMSDEbLlBNA45XIBnJHybYw8%2BsT2vcdL6KGcacCk3zx84fkmJmhEKdNbeoacCHP6TWqnjs1mNujoI3itl3NzR2rscbsXiBeFSw78IS%2Ffcha2JrZUwG873B0GnybVWY8SAKLk8fx2Naf061U9G%2FrTnNLNaGdD8BuErRLLl9XkR9%2BLcpSBvx%2Fm5YG2HWajOHgn4vWeCKLrDvgeJh5pkx1&X-Amz-Signature=76c04f344ffc36d6e9f3e370b62b8c1b9efb4308e2e5aa5c518bb556c96d46fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
