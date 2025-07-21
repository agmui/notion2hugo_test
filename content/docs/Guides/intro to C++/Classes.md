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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBCYY4H%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6%2B781Kkg5Hch5b7rdpS6kJD%2BeKtLxVfKW9gpFLIEU3AiEAhc0K8RqynUDGFl2TaAQNmj97urCGtnizfrsQXF4hDwsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjRtyJ9UW9axPJ%2FVCrcA9cZwgKTMz0sLipqiouaIZrh4XSR9JsC%2BAu2fqwXnuH36MyREAeuMwjgWZ6BXK3acrnA4Rex8iWmbkVg7qsm%2BanpFwNO8CZ7VHf28OUAzrzT%2FGmd4Af%2B7gwCiU9uG2%2B%2B7vRxBgoC4%2BiMnNWWKrlQt0DjxVhtDZFXK5jvDOuxlrK1no7x9ljk7lXo72YLqVFip9SeZfEMeh3KbIRMumsfX6GND7%2F%2B3ATYyDFf2fZQNQKjhY8esUl6H%2F30usp%2F8%2Fzk99iZY1cNwxf0GNDM6bI4NNs9KxCysKZCFt72O8KQy9so0Wrq7yP5gztk3Q04gA0MbcAlYjrlZixzCUgsPD%2BvCh0pWFTPuNTQzmt20O4zTH6PGfBm8%2Fo54%2FSk0ZEYMlwfhPUtgJns8HrxFCfEueR1Wj7W6gXJlgyz%2BGOToOybwxR6kwbr16tF4nLjrri9Zsuqh5jiX9gc7NYeOse2XjlMfr5tP78bftLt7DmmScFbNbgY70W9Oih4tJRgcXnX1W3jXdDmdHCdRRRYx1CBB1cVAJgy9d7TFDMnO5cLB8rrH8ifzhy9YyxHosjj0FKpO6AVv%2FIuFfnyOVAmNS8rlon01WtczdkPMj7nT4PQP67XTyhx6he1QJVPzo%2BcwA9KMPSS98MGOqUBZSOaaUiZ5h9JJVw4TSCRYcPz104DQNpPjLZj68UNIq15HZXoY7pCUWLg5LbjUX8q4tG1CoQPumI3MS6RnQDGkLdnp84Uzk%2Bvg%2F1FCTVulQFrBA0HrQv7zf9FSyUIg6aATCzX1iQGthW1CN9LaX3yjHCINjTvlThegQkmyAE33%2FJgo%2BsF4DJ2d6ha%2FFyIg7Xva1dmaw20VWAseaIS8XAnnrJHvh9J&X-Amz-Signature=e8f64986af579ef261fa3fca6568feafbf47b50d459a4b0eb37839d6aada1fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
