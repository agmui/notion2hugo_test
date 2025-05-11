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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LURP64%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDFZj%2Bw979Nj76XNExJ75NMR74OirNZjG%2F1o0qgzK1ZuAIgF9nJbZaTtYZXVQOFgzH3srUQU7Tl137E%2FvDFFynrwbgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvONhhlUWLU0hK8yrcA5%2BO6lYU0wxNh3O9yKWAAGyu6bOUbTwPE2EyeHM8KVXhQy8vks4O6aoLU5h631fsG49U%2BuQBozx6oQ3Rd5ffN%2FIcBQfO1ISjzsWdG0mxWtPCS7PCFkMjlEi47bUPCuWD%2BGD%2FEvmhKFSQkv42ZPNPcewQZDadK8RTpHSqyh5pmgsWVXfDqGogYZ250fxyaVswiyA62axqbD8v8nXe2L%2Bw92%2BPENr0UOb3rCt7RDKlwr9c8CCtWeJ8cysYsBIg3qRUOIeyEO0unmifW7gnpnign%2FBoOyRYQhio8QQvCyj8r60RBnIlRRw7Gpj8gaLwiVD0K54Q5Q1osAThw9O7Qgn8nO22cFE8et0tgl63Z5Ogn6Qho1UQwfUDnJb4PwQqbLD%2FSaEYQ7DvWMal0o0z%2FU%2FwI5AvzVRrwB%2FmU%2FESBwpuwpQ4s3QxfRCdoSxuNZ%2BIfsqaQntfWCLlmWfmejMPesanuL68zCzc0hltfPKaWqiNh8FtbZ44fyq2B8qu6lt6L8PmKwKAAmrG88LdrAt%2BHNm3OlzdvkEKMwWx%2FufRRI9HkrBeAhOv9eglEPEk5HIO6XZG5SObif21nli7rZ96BeMl4%2FGzjJm%2FSk2NR3KLBsYZeyDIsASG2SaeJ2r1g7MCMI25gcEGOqUBfhGzDNdPzaGy5GqEtKmH63rUXggTQ71rRhF%2B2nA2teh14Z0NGni4w7kDZD83uHOrYUwhVqdLbTUSKfGLh9uA2Pr80OdENQS8e%2BpY05vEG3mLerrC3kdTKkPrpNT0xloLV0IEFFxOMIPjddn7483EpM7r1tCf%2FnVyxq86GwE5gNkRyVeNvR5%2FnAxF5g4wsyc2w%2F3RYKZL%2BbTGqOLZVY8Zcaiq4SY4&X-Amz-Signature=e5412df1e2319d1a6f9a2a996899c86ec475cc6c27c2679db2a845ae1e93a61e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
