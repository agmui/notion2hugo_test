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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUMFC3I%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCepZNwI3nmIPANcQlu2AAqUiG%2BpUorwz%2B1IbDXEYokJQIgS%2Bn9moaYE5bZA4scw3e%2Ba6cf5NB7ZJ1enlwqPqjyRnIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOih7QEwMZCNTpcNsyrcA3sX%2BcvLdCJgsBwrTsk8Lcw75I31aMMikkH8Rf7VGZerauW7Q8KpLGV1JTK52H0oJsNNMDEQ6YffYiBejYIAjeNDIeUqCyCB90f5TyPCfY5QhGQoemY%2FDsXUbohN%2B3zJVBieRO3eiS1IwO4yCpjaG4PlV%2FbfMkHDFfwkTJm1ktWQi4ZsZQQmy%2F6peN5mgL%2Bp5%2BgMq03yonKiGGTb0l7WES%2FGgWgkDzU%2BFM6i3%2FR2NxV99FBDUlfSaraDwJ2f0nPf8XIuCd6H6mlJFCByUnm%2F7ZiyBL1IvGLnY8%2BaazJ7FmbCR0EHLJOp94fprVAibmW3%2FecdmunLqYO4Ft8HoaVFHI%2BNAaTpVaBgGnnUGDr50IDNfbPa6oN4Ix7F4Lej5zYEWmBGhAoI%2FihzM7kHg9vYmU%2BycRv8o8%2BcyYTo4Jg8gIHFtp258jl6z3DmD6c0PHd32Ce2s22Z7G%2B3k4X4jehbq%2F1b60ZDqfGXUZ3RfiEgnp%2FlRHziqdS2FfArnvX%2ByxX4S8km0HOfTxpNt%2BV9rnLi%2F0uZPYYBv3lgATeirz6jN7TTaxelzXFMY%2FGYfVZ2ROYLfBc9S1JVoGHsxxaUda2blzOfedNsHRwV5c41aExxwz9MpMWNwJLZ9pziFQBIMJO0kb8GOqUB95H5vr8qI0GDUr8mJvWJwaPtDoFg8fxsSMfHoIvR9q8t93USHWcJI1ZX7UnfWhQM8JfM0XkCUmd7ArrlnVVGGFKEr6uxxEK0HB7tCV5dRxt%2B7%2BlC2BjKowZg21XX3H2ixEkWRoSoOcNAsaR7EhOgz%2BeKte%2F2kiruL3iFHpt%2BkTyuLs4qnMqD1%2FPJkKd20ttM%2BoXtgkDBcum3aizQVLlJ6jGYHMod&X-Amz-Signature=5b1f564de24f11230f0758942b9564ffbce7c958fd524e95487fa7faf69ff777&X-Amz-SignedHeaders=host&x-id=GetObject)

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
