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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ELPMET%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzK84uvguhzRINhJNE%2F%2FFunvEhZp%2BcwyU%2F9xRCEtDPlAiEA%2F3tz7oElj%2FNtBqPA15DVgocT%2Bk9%2FRued%2B6CvZtOhULAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOLoYE7taHTVa%2BmTXyrcA0m1aDDtZoVEPoAk8Mt6RPh2MtmSdU3rF17tk9MVQ8iSnMddinBrQv1ZAbfl1cJ1%2BYauEkrsvhWfNn%2F7UGJEpLHF%2Bw3zLKZ4sBj3jpHMizN8VyYm7uxDiTUU2lc9T2ADrI8Rfjs4W1E4NEQdmTf0MIYgZ4S1XaKYIcc2K0PXQZIqwDHUTsA%2BTdl4THShaGXTSaIVlcDARbOkdbv8POAVfBYFlkbzZ726o12GBr9kJrmfZBFBdKBD%2FHQfEjst89wrLY31OtAVoxZiArb6mTahqEJ21fEuO8nvItnloEDMk7pcrQtJleKD8rqZM2oViaiusiAwaqh9F6QCd3VJRLDzRQoZRW09CdTCtxjJnNcnEAM9WXg3bU6kz0M4H5A0pANgSNeH2aHo47jq7eg1WtVE1qw0bQP2M%2F%2FnplRh36y1lDW8Lmp708qCnJ%2BLGCuX9jVqkbHPGvweC98NRO5D97kTI284sQnzJWnm5kyuaVIjI2dbUqSgIAzb7L5EhIi4RAI75o2HClDAKrbMcluZfwbCsmV%2Bgrxhi8YzO4yp8a4bSUDIFxK0oKIjq%2FLGQAL6jhotJrAogGRsrr9EwwQrbdndX0aTZZxhamrMuNRA1lKNEzjwQeEEJGQ0Xt95gnKKMKbJ474GOqUBJUSgZecwb5ZzltCi2YuxaiQ2f4BETwSBVVJAZHO5b9NFEXqenuBxXaSbD%2FvYdrZ5tsBI3zT0LXQzopknhpaf2A6NArw1SAe8EXtPcRKbhO4BW1l5vLsR9ApfK%2B6SfIOOH%2FCaFsMFmUfJJB7M3O0p3jEeXi9VRxEhbSumWQYZwE8BpQkLpdsOjRqRZQPJ9b2rV0PLRTXUmMDWCQZDR8yTQzW1D4bX&X-Amz-Signature=f58359432b285b6efbd57dbc428c20825a714219768938738a17fcf9a34651e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
