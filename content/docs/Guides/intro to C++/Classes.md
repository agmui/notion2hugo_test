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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOWSNBV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FduN4%2BGdI9fmvYW6OlzSbANTm%2FjrFy8pyxeocqc0AQAIgFE5xjf99kogtnKU7nWw2LgJ3VUVGVJD%2B%2FjJOxGv%2FjmAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIhbmwVUVWZkJO8txyrcA7%2Fg03Hur3%2Fq3xY0tluO8IdZB8Dr7NhuSe%2F8u9ra2jA3SAA3NZX4TJytOvOS%2FAfI%2Bf%2BqtVzfRlwK%2B2NYsOJfjb9SVwWuV1jnByJ%2BqX%2FGpskib4BZuwGDADmq3v0UjqzqgEva2NwM9sk9MsWQ0AT01b5LSXYHmoCrrmrGeMX88hFGZ053o0L1xFhJA%2BzSCPMbxygnWz8xEndsoMRgrwDk73enEyghagtYtnQ%2ByHOzVsdqd%2F6lfbXqA0vJFxeKdllENrDOMA79dAe4E0wrvRyWx6ta7ADvg2%2Fk5Btj84L32Qd5WkhBephjX6AEwu3AEPT4PweHjBNHG16GBEzE4J%2FSX%2Fs4QXFqx5k%2BcuPsYwZ7sMUgfXhe5LP5h%2Frncn5S4O2HGBvVfkWj6NayKhixNVst4HcIcNi0vrsfTf5lyRHS2hctw9sNLP1EWBVPY5ImxruJpqxRYbltmJONxvIRvNgQ8scwPQE7BSw2jCjeI5%2B5huEcC1SFzh3IkHPO3lZzE1ylsYjpZWn5LztfAlNX%2BSngAGDmsRdzk48Fd8ILsUeSMCvIiHFKA3dVcnStlQ%2F%2FhRl%2Br8XoXECQ5Q17iK9Hx4AuvFIMFwOvsAh3O7DwlC6uWeSZ0%2F66Z33YDsdevMhgMJzG3MEGOqUBycVyTdtGEteme25vDw4MWcrk9VO9M54WtkgevTe%2FvMfcwQtP0TjQEwbOoCrK6wOeLStziwbXHpjPx%2F11TLfYGCFmqtRcARH7q1GSVDjH6zOFKIeitgZf4sNoyS55g28IYvdCRRFtpsuL5%2BvhGVpkWPH1jeFxZiBlWmb75mQPY9aKdWRbXI3zgbStqFIjO41jxSzD%2BfEv9q6lKzRKQA3R12yD8k3M&X-Amz-Signature=84b18071f392f6ce0ae48820edfe33256f05cdf38a521eb5493269cc2cba41a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
