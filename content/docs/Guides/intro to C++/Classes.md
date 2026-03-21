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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SICNGE%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHtGwiqeJCgD0OO0xuCB4viyuVEVpMsYFbogDCP1QS8JAiEArw7OXbgDi%2FgSiUgv%2BJEnL%2F9Hji3moaPFByMDW3zUVmMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFu%2Brmo1l9ncWN4k4ircA80TwY1QyGax3TTX%2FPrXdDXjrtIcPo6as9k4G%2BScl%2BrXhw%2BcrLDjcrrXxB%2Bk1Gdhp9g8LaJkACrQZXaC9vbUVkbGPJMcHYnjZxKbLnBJGvtF%2F4eEmbWTtSkX7xTZ%2FjLnO6vufm%2BFTZsknwDW1Q7hT%2BB23r%2FNxtjJ%2BC0f9KGMqhfyWP9BGUR9baV58zTBI3nyemEL0K7uraeMmA2cv5oNGFn9xHBJFzEqZ2IsAm1FboYktqxq7AtyLFbw1xHXzYv23Ptn3NhPKu%2FRXUvpIJJGX3t3dria85OZZNI9rVvZ%2FrIqLpeKDxb6Hbphge5EfOMLNjppjvb3dr6MZcZCa9zl2W3s42F6BCWV0M11yX7rGPJObQZasQTF0rUzsg3lOkCmK4qHTxwjDTMCKn7Am0pIDTTp%2FF0aVNRyR6iOQyBKX9DQ3tOq0MuyMeK1jHvdvxItkGjdw3UWjFZYJDVKQbm%2F20yrkO7p1m1T%2FrqQzs5REfKFqzgWju5E4mh%2FIhXO3v9X0BCpj%2FF3iIWk2Vf%2BTgLnnmIP1Wtur9rIhgJS0tkAIJamqHZRPu1YsxIXV0p3MfAZi%2F09G2QLiGOIfxbIlPqzTR6oq6t0ZchFiqRkGOpngnWwPYvPf2RD86F5wto1MK%2Fd9s0GOqUBU6ZdKVeYbeVlpWO2uydqldhzDLcvGgNRyE7YG2N8oPh8wpwWQnO58ZxoYoYnf97%2FWsGst8vaYwSlLwEeLhQV1244pLakGLlpaz9jZobZXabJXC%2BCzp%2B8PnixpLPqHdZdDOTy59f%2F9%2FgNxJPn0pIVR7yzHw6V9xUagNBWealtkr0cjVp3%2FgznJtapxSKCT8E7kF0rQcS7P%2BLRi9T%2F1zc8BGCGZv3M&X-Amz-Signature=6389c30fbbc4965b4d9c0fca75b3557b98bef304f753db2917431309c4c27d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
