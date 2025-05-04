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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKLNNJRH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIC%2Fj5IYz%2BqHcpUJlyNJujY2zHLq9UdE2KchFjJMI2GX0AiBPzr31bZxt6YL5fMmSkCP0m4VMheQtCNNPchz4RILSuir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMwZhGk1yk7FvNyyUsKtwDZnJsuGERb57CqVWO8rXNkrWnXNQ5hCKtQicHvJOx0NSu5O0ePfOcIqANlNhobHHzL2yeZPzB00TwzpMeV6hooSRu6SyGopao9Yy6U87oaC3kPxyL97%2FgGXV3L2edspMhumlcGF0Yl%2F89JAidq1CdH%2FDBUNw5lAdvdC%2BZ8HrJJzpiLnfKe5nZ%2FUgEoulfVsfKFS4sMfDgKdlxkmmeDH0bpWjSpsil1CKswMBB0AwdCLHQP44mlPHi7PItN7WcFaZHpaYykaGkFFnEYnXvSE22dSpE2LNbzFgITS8ZHkq8dWD0I%2Bar4FU%2F9MlHAagKVHmzUVnfXJ%2FykmZsf7ywiWmhI253c%2Ff%2Bb2SRQqFChD2URZi5W6mqT6nKf%2BdzG60tNMT9Tc5SD4CVjgl312vDN6VE3KUJReSjRk3C4qqrknNLMrycEdPCTgdc4ixKz55WnwXWKOljvgav74UYiOCBPH9v1x%2B5qyxfjMzAt2mBANSf%2FM%2FrRTV%2BQEan64cUXtuXWOc00gi6nBWsbEDGlohfeOKsBp6F9LpkqqHqAL9%2BCUNs%2FYd%2FFo9BrBsnKYmIxdr%2B%2F0wrXyqi6AiI9rE2rurz8CcFY%2BkGAtsmxDwNx2qDrjuCB%2FR6YMLx5XTryMod4I8wsazfwAY6pgFwj6QHrlIHgtFGVuiR40ySolF%2BD3Y8QRNuAxZhddKR0d%2BnTKytVKp%2BVlCuR3%2F8%2BsUP05BriGnRC6s78alZhHi04HCfzCXxDMFt8q4ppjHA1qHfQwhWrRE%2BAcGRFlhXHyCY36n3DmyMzEJqwE3TvlHmxAc%2BmrXFKe%2BHAzOyvIcLoTkonGS9T0pxsC4qpVVW3ZI6Kb%2FHTrbIgnxJN6dTNzjs2VEyypmF&X-Amz-Signature=296a4ce13e3820710da0a6ad1e47ac3d45d0ea50b88f0eadc07d2e61f4513d11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
