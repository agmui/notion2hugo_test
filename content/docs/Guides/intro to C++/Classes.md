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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PEAN7K%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3eIHEH5BWOLEgfE8Fj%2FT5HE4doNaeRxxzy%2B79aa9qjwIgFFIDBgMEG1LKvXZj8ObZHE9KI0ZWS9Vmn6E9PuHuMdwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6w0jWzASBX%2FaPnESrcA%2FBjew1klCf7RcWN%2FbDroeMPtBSr86TGwcWmi118Cs1vCHr%2BuP70BBpCff8mLMCz6GJ2klJs%2BKPPud34%2FffUtL6mLV2%2BwsHkMefa5JAK26y7XwNSi%2FCJ7po4LFZ3iksOpSHyg1ZDUr%2F9CCi74D%2FQx4lLho1oXXDl9Bsp10HcorhpMbd3qrBA4%2BY1F2EDd9x24O%2FZz1GD97k%2F%2BTupOjzbodlI1BgBZiZK3TiSRAw8zd57PgTskxgTwrtQ1dBzBcZM8abT7olHoktWFGcDuuNu0nrW9CgV8srRBw6ZDtR%2BRjjX7qa2H1vKEYafYRK8MHggSXUgqI6kMjuYrqvKyO1mypNbIl9Zx9JwsNf7ljS1KEhaaAHn%2FrCpTAIrQapWRvYQ%2B6%2FZWiWHd3jTHtdxANQaGZ5Oak%2F1dCiZyPQHzl0BbSJKR8VJDzQHOtMItlmJEJtT3dEKH6MMgH1x3RwMyzDFcFL8FDRdkHpU1dLlQRPUOIiA1As4nGRTzT2jVtwjUUEcqKp1JN4UEGeg2PLOo7n6NolhwYrWK4a4%2BqtHWNbh%2Bn9YKNtGr85daNOnjckCK37KV53L4JDSySJZ0tFc01TmpFcWzbJDshoVvvi6l6VzgFEMt8U0vLzBptLw2HGEMNCP%2FMAGOqUBqQ8ljz%2FjwP6ouo38CNJVApV9nd0bZVqSxIz4gOj3HxWqcAFj8VjByA2xkAWFSHxWYU4fF8HQxMvCXOP%2BiaxnB7kdLJzY2QSjqNTeXcVsQMb4B6FIgv3zfqKlOb6uEY3gSenjeBDrSlfCxuEaHr%2BNlNK%2Bjj8Yf38GtzKJjoQqCjpugmf99WtA%2FS%2BYf1S%2BqtTByeSQs%2B%2FumRm0BBfMP%2BZ%2B1We38IpN&X-Amz-Signature=7bbce1ba2a181671beafe088a527cfcfdb1695962aad611f295062c97a45a52d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
