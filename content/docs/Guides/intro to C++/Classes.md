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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJOZEU6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDh765FiIA7HfZGcbV6998ILxJ%2Bq879oqmuhY8zOeX%2FZAIhAL%2BwQn%2FM6VhegQTsuoYduyBL9%2FKV76H4%2B%2F89ihpRCHC9KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzcjsny0HuEhpr%2Fvi4q3AMNcPgA246y2RuKyKUrmH83ZPcP9XXTF%2B653OA29vqZSf7rHN8EyNWC4N%2F8c2nX%2Fs445IGxIpa3muQ%2BqcxHVahNIAcpYaNJnymep%2FnBOW0JVO1OJIrdvUhFurdoyO2uL2Hb0AjWcV7WFBYXBovL6At4tLM0zk6mF6dK%2BuZZnH8nUjBSVj%2B9R%2BQ778ntyM1%2FXk1Wo3Db9lPIbOx7w0OMhRV2A6eYNO%2FJf1MuIrgTsCgVclYAJSTgmGFL3vbGqmz6AWEjYsocE7TVINrF9mEamforUk4CjOApQ5l7OgG9I4YXLEO3lonpMBudMYVATt5dpAF0vZ1Cx0nqcsJkbLD7lDiyZlX52PzYaYsaeBXw0gHiqAsgLl%2Be6ZytKFjEWlHD7gkn%2B%2FMRfpvDBi8ImhSoZ6HB4zuwwMxZQAzR04p6FFmLJTug6wSwj9%2BGMrnsxONRQf5K9KIXvlMvPW2nKq%2BwyhXiUrwHh2YybWatC6JRJxV4it1E4v2eoPe3SIgWvA80YnviAezqH%2FNGYghigouw5r5LP12etKubDijanjRKQUDSwc0hBu3ZK5a7FFB4dwsgFP%2Fdy5KbGiA7tPVpV1jvW%2F8pVuaGeHCanFNhgCQJx6bAp2gdNSVmZgRn8q035DDLuZnABjqkAUfF8oDGGZye0fvn%2FyFufT8QcsXdhil9zddm6%2BRgepcDoVpC7%2FUzPcgX6SRGHin2KdmxiajEXHFso%2FqBuB0xusjlBc6a8Pu18GdrMAn98InxrScR5ULjYTsT7AzOieyR7b1hxpw1Vsbx37%2B4UwYahi9wWC0SMHl2lfhIhpI%2BooOgXAHdb5a9ZrWLYo26D1ks6YubRPLDbkW5ZOMQd8g0E7dd1EQC&X-Amz-Signature=5c97dcfbfed5c85123369c0f9b021368dd15b8fe97d886608699168ed7ff4fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
