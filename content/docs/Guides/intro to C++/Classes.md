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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQFKSCJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxP1x72ThJByXcEsqQldubkpXYvcjMHK8CHn4O%2FLw1KwIgJT0vFL4eqAu5EvCYUaf8nf4nYfoObiRYUjH6j4BZ494q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGFMXx7Wc8gYARfb7SrcA1epZTJM1G7n%2F9AHRRgmoOE%2B44EUyo0BUww6GuJOdYGyc2msmDgVKIfMn%2Br3jW8DIZB0VT3EEg9%2FW7n2EkdTOQJLtRTg3aytcIP%2Bfa0rFdfvucDcV5j7ix6WoxY90iEXb4dHZUPtLBlEufIFY53M6qqHFYMeFOLL%2Bpyh2IMrfajdeE4a0miZPpPhon5lfpttqTspUsndJzFPHKFQMC5R6kmiJeu%2FuNLrQL1tbXRUgTpKcnIdzr6NgnDRlzXPg5jVBQcZDteVwe5u3Mm1blet0p2HCKIMMr1gwRJR6N2B6j1YrJwJk9GG12G1M4nQ%2FaQvl2vE5EgFczBM0%2F2bVucYI0NrLuND5dtoCC8MBw8BuF2%2BA61Z%2B9EvoX12wyVQAEsIgbVX2vOOhvmZICiOAYVhSDtlbS%2Bojzj3uDIWWP7Uxjix0jmUS2YiSDDGNrdCTyKm900iKHGVN4TPUrXUQRBTWchqd2%2Bz5Lz3oYtuq9122kAAi44U997yiNPk0ZGYyBJgHaqIvaeByIi0iWIdoe1%2FMlCLqZAwuqBfNLTbExGT0QfdW3mjXOE87aH9YJJdyVUa8N%2BgbAt1MMQdOHC4DIww5gHvwbrzN5jeSSRmkdPYYuH4mXX%2FOR%2BSSJIpzrgDMN2brcAGOqUBoK6akAoRDT1gyotbVdTmlD3l5w4pElmXSu4MPldCbB2NLmu2Z3LRvepD2b7uPdUNtm5KSHZI92TRGLZReI6bLnxKzO2FloqZO8VlT%2Bg7VFq9%2FnEA21%2FCojiu%2B%2Bm%2F8tF07%2BAsxhA1Mgb4IoUc85dJcglxgDxn5d1Z9sUTlix8TYqY3V%2Fjw%2FSdddVnCXbBC7ZKqWechfiJynRlLhSsoLrT%2BSejdd33&X-Amz-Signature=e51ef2c3dcf239416abd687f1d1e520a7a7661480d7620fad2a008be4d154f39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
