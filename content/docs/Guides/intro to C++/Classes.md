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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWE5RWKY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTD6rJDFYUmbQs9%2F4%2Byb9gB6VGzbB5nADOWnFsvw9g0AiATCOaFl9e7iWFyEZm%2FRWsDS0jWjwSe%2Bxj7mQ5tjN4Grir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMwg5FJZcbhZQrud84KtwDx%2B2Lquhg5dLv4r5oSLz1JD%2F5bMefjSlfdoxBBiDgS5tmImT7FMODjBQ9iZa38scPyE%2B0TYvBMibf9EYxz1327GQlH5lcagOp7FLfFy0B%2FTINv9tXAmoeNv9bQLApryFSUAQCQ4KRTK6%2BvUgBihQQl7VnRUJ7yHyLXf8oDCzmWaBJtjMJvRtVVu%2FmfAhgzXOMKAg6sbX4uCk%2FQxMLBXPNk7iMDaosfIBgPoC4EvvZzyZD8vwQwnpWy7MBDVufJ%2BElfcQ1i14JI%2Fuf9W7ErxCJk9xK2WFaA1CzVC9gFB6rl6vJNt%2BjSXex8Q%2B8kEPy4KZLIsEvFEyeezWNeeOjxXuI3h%2FoEK9QWcRQCGipMyfN7IZwb7Z5QATxwRpH0knF65oFin5pLyYQs02JZXIZH2KToLElvymgGEo41ZGxUbPNwXUr%2FlnRRFUO3IPtGDsYADq9jtwT3s%2FAgueTvE8g%2Fm9vv0eIeI%2BktvjInVXxYre2DX9zeoEO%2BrPJT4dG%2FtxIvshWXD37Snww6Sql8vRVdacRh7jzQ%2F00M8WAZPC%2BrQppn82tzf%2BfameL0K5nyDsQsF0OZGA1VYDY9l0ACyUjO5hHJEf3ye211JZ98Pzo8j2xGiGGrfebFOg3rsr5j6Iw%2BtGvwAY6pgFKiI9Fwc2I9cZOMtlRq%2BoYpI36x3bSZIc%2FRwQuXpM75jsw7tLjvlGh4wtzRSd89xcJzQ9us1SQqx%2F%2Bfrr2r7cgPREdQBPI6BGyVWu2pQMB7EkKig06oV50a%2BazZ%2Bs%2BHr7OfT5UpxX0jgXoY6tk6J2WyKIyQ3v8VJPRoTMrkWDbq0OgcXVtYHrXSv3ECz8c9wDSlUV930c%2Ffw1M8WHAWbdxX6%2Bjn5Vq&X-Amz-Signature=baad4aca4712e66314d58ddc424e2cc669e1bcdc4531698475e531ddd28226c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
