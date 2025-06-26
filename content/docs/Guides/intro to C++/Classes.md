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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6MI6RS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDc7%2BaSeEca2A15WSFk5%2Bama0sWDc3jY5n1Wih658OO1AiEAkhkvYlXRdWGgvweq11n5zNWUO%2FPFOYE0bclb42n6rEwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHHheEtkkmCZWqDaoSrcA5akkACIiv%2BlqYIZ0Di%2FcAJgn43pa%2BIyD3yFDyrcN3RjVID8KkEQzd5MP5goI5y8f%2BvPZOwO8xjdV36sRxwfi8C%2B7RUrW4873bzr9tYxzFPt0njdlUnGcoq6wdCK8QOhx3yky6E1DK05NeqXNwXA9lzI7ii10nXyfc9DaMYPBHHA0v%2Fq2Cjfhd55wqQJdrYrsghoMIP71hIJq29E9M6J1enEGxEbN5XOIOAvs5lpunCi1oIjm3EbYyPeyaw5YmUPElcxmYaMmLN4JMtuq35M9YaF2Klp0WcPxXPnm1O9Mncv4yR%2B%2FlI1SV21N4Zv8RTq4krmoj66Q%2BS5EvTycnp%2F%2FCcmareEDCUo1j2fkspxxrp1ykA%2FsUjQd34eIr9HLLRlbljO%2FJbQvCZCTjFae%2BRFnkpzlg5cHuh4IHMpcM4gip0v70FEwSXVLETUgYac6Ayk9WfZ9n3De7vaDldx8mR68ff%2BxHZTTLSyetucxGSnOD5koVY9lmctM2yHKSJnzcB%2BdED0Y%2FVaVZrZ3jYG2yEuX3B9QfB2QZO0bwrUPvS0lhwZhjI0NekqjH6nS9oKpjDXdB4q1DsiOTXqGHjlVI87QgVcFSMhE5vJGyY%2F6DFbiatt20KaE9x1oetRsZTwMOLL9sIGOqUBaxXdwXX2ru71fUVH4Gs2%2Fcqc7jiUOfl9F%2B8hs9xOzBW5D52bzLb39WZNL0nCN4FrUQMd1BlvobP67%2FLLUew%2BvrEiAayp919n%2FzOfcMo8qKz2sbCvySI%2BYicHm5KjpeYZPWhQ3B%2FMhkTKOxYbCsPJOujIKSwwBUuqmFJOGLZ8oq%2FS5uzq%2FpckfYa2ZG4bZDXYi4TbWThV1bwk14laBGSXy9lTczyK&X-Amz-Signature=52ec305190673409d0ae3d5c7cebf65d173c864044c96ea8227d670e430c0a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
