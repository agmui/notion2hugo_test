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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDHTSEG2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQChSPnhPwkgzUmalAuyqWonP9uljUIzf7gmzxvKRWM5bgIgQWXeVWVDqdkGIPb8FYdxmuXBwcrkYgptqx0wvJ5cIZoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBIkXF%2Fz79wKKpZiyyrcA3%2BBUJv1jhXcMium%2BD3RvJGNLQYN8YBommliGqgGmDnVjKHltRrFW4X05FJGZlwckA384MvEbtZNNyNuYjhFudmI%2F6K%2F7e5emmWTYfbdCbl48abr%2FmEMgDerJPpWks%2FnIq9ZEjBmK%2BdhRrfDhfVreA5bal1eJgHrLT%2Fjc1c8aXXfHyXpkwCy%2BsZdvp1XlHXXcYulHiuRkoD4T0z%2BAraF6n0ejaoBQr5FBD4PYYgtNrCrNEtlgQAnOt37r096Qh8LUnrdvKbG9VtU4J9%2FzShymgbVI1JTY8CD0p6SHc4SG%2FjYJfq4VofZw5Ha4ipwvbvzUBY5bwsaGrRja%2BbhxaW3cYqlkrCrIsFfXHCjnIlpR2WXVmM%2FftYAssA0XA5s1Nma3%2FZTVu8MME59sanlYvrjXmg4cBTDe6tuWBT50qxcT8xU0vd7J7Nwoak58unl%2Fh3Kw3w3VTu92Shk0hwCoCXINI1479js3ZkaMmomxnwKVH%2F%2BjrJianCW9PLUUAgHe8Afp%2BjBctbVF6v8SpU%2B1geG4886MNRbcbS7upZwXOCOaJ49abXH%2FSgQZXny%2BFzWEm%2B3VrInNRc4%2FkhcAtb52s6jZ%2BscfFtfvS22a2i7Q5G7RdYSHAIwe5wGkwC%2BUIAoMJzv%2B8QGOqUBO%2FhHiR%2BIuFSmGAdTduTFsv9xWksrQSkbdYuk1A%2Ffyy7CNK%2Bs%2FfX8umSJFKng56d4u9noreteUIP14jC0ya9RSs%2FWJXvL%2Be6i8gyQg9XpHZxaiV8r6xZRgwoX1ka5JxyaCxAGgrtyd%2FoD8wQdna1GtbC6kK%2B59PjGihaIefbWji8%2FXO%2FqZep7KyBqSQceu%2F5n4hu%2BoXXI2ekxV5umS450phERJN3G&X-Amz-Signature=d63bff91e213122e218d6e905f4ae864129e91e71ff5b7742cf268ebd6a1d253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
