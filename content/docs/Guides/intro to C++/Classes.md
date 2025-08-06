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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6J2OOK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCIxDEWNGtem%2FlZ3Qq7RnwLEr9JCodilIWpU2W63ZcZPQIhAMvRsczzQQZ532F%2BzpNk8D9oTmYmF%2Badix7QCz6rWuZ0Kv8DCHwQABoMNjM3NDIzMTgzODA1IgxP3BRQ6pQVFm77oPsq3AM5VNmz%2FrVopmh5O6ZKDRU6tsRjBsOSukdE5Lvz8kEwB%2FNyObpWc6%2Bi1Gi8Njf%2BPH7cMwPNXUZ61nu1KUUZ8tIdp%2Fx16M01BzFuSPsaIyr%2FajKOcHwEeGUpdfwq2yC7YjWLe37%2BU9kYsSkrjl%2BYu8kQQEbGYlM3eSHYrmp4duHcUj9I8%2FXs1w6o57%2FnOMm3CZtAITppXezEmDN%2FJfMeGuqetV2b6aH%2FOO9bLzqIX6cTEPBptdu5Bkv8%2BZB94gNogC9CUwzVKWwXrWw4t50SZUjr2EuA%2BLC0kDJjcT6SUDjKdCn9F3WlkPPS4k3hPICxFz%2FFC5Js1WCkJKF2i%2BNVFzW%2B%2Fs6291OljZ9ojVqeje1pQx7HdVEid6TwbjhJdVoWsQ75o1Qf1bWqItQ93KrsroVeZS57lGUSoXWn1QbBTg2jbFBtd8Vgs83FCipUut%2FgM1oG%2BKJX5RS0hmnZWs6Jbd8%2FxovIcXZp1hK2RSkKALgX178UNSYvDO1OWVSbZ5LqNTqpNmELbeljNhuXdKCkDwqmNF4YfRk%2FMWc4oQ%2FthiastP%2FiLpx%2FePLBsk2zrN7HITBSc8ekqZhDXOPyKK8lwWswW%2B03OMKHvUjan7B%2BUn1YpYkC5ofdkm5oop4xWjCyxc7EBjqkAbTogcggS%2B7Np0VqZpiHL3g4mJ7A08R8P2iPwXS8LwDBfAXDHtDUu0%2BMVj2%2BCuHHovlD9Han8L3KTz2D4hARHqUd5zVohIL8AXIPOeUKRZrZZl6yRl5TL%2F5xNVznmWJ2i0dzXeOvZh44TfZ1VGsBxR6FHKZLQlxlHEH0U7hHw%2B74g1w7PC7%2Bh%2F%2FP4NUhJYqmVBmJHAH4tPb%2BJ6TQMUy3s6UA%2Bvo0&X-Amz-Signature=397de7c0a08e12f1d31a41daba97a248f5a54113c7d0767f2626857bf5a9c341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
