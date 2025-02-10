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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CIDOQUK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOJ8hTH34LRjeBUKBBkUY4s2%2FvrQ6xFTKMeMTPWl7E7wIgBqn3UQG8qXps195n1SsfZP69DkWfJv1NBPLaE0slkQAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObpczOsgDSul8TiMircA8uKQTfUF00qtlNxPTi4qp2HnYbomYZGh6C5%2Fn6qPshn5PZy2I9978kGqSo4SpEiJVKvtI5uSN8St6ilR2CBm02hlzIXM4rZdgbyYmzWCUI3%2FCO%2Bi%2FuKCe2tGHDZ7wVGJ28DC14%2F1rDBA%2Fhtha1xxsfhUhbUt37qWN8ejBXRkQ7l5QfPYQYBX5apObJgCI%2B79RIgoplfPw8H%2BN%2BQGixfsMIwN0yqD1lxmZNQZZZ%2FrbndB9zuF4vgMo1JFY3IZZnqvVjkK6fvkWAKTPxBkmlZPAa99P6NqDGyOjH7oEYve8sqoE0ElavDAhehuZBeCliI9%2F4Xvh9OML6SLJlK%2BAJ%2FxK%2Flx7YdYRTm6x9hVea2Z32pEIPvxR1NUss38dx3FPyH4XFDKCsefVnBcTxbV4qGoByyE%2FoH0tm38uzUFtshOOnJ%2F%2FU%2FGSBf%2BCQM1HubY40hrwJLGqhKvp%2BhsHr%2Bjy860p5B%2FVMRL2tswS8OOXMk4omca%2Bx%2FG0375OKBIfZacQzY3qOszv3vpc9QImnC6J5s1XSere%2FKEYeDYQFEfocSuexnP9ElLhfsaoHzAe4fX7z6ypfWv%2F3vmJCCLD0kB9Nu6cZn%2FBtfhPhNW0plpNoWKGLGbtvplZOuXpgPnCXGMOj5pb0GOqUBy2tIj4I8Qi1vSo%2Fks9CyhdyBjkUWB77Q0BjPXs7VzpV8FtN9z0RTvSIjrSrkGMWyJ3AicBnQYAGPb1yvvedi1sPc%2FmsKFqaeNq%2BheezFcp%2B1n6cHXRBu1lhckNzvWuQJDsu%2BRyAjK1%2FrwYSB2CQucv%2BWT%2FfSQJNHepStVLFC0gC47xMtma8lRlOzfUd4OW2XMeQ279dZEJcHg9FL6maL2MJ1T6YZ&X-Amz-Signature=873ad95f52b97e4e42ec03110ab887c6bf14a89c2be610e566e94947108afc01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
