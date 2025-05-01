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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVVMYWB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDRSWo%2FgOEmDHoLwD9ycjQLC1eBExTjDLwI%2BQeYRN%2Bb6wIhAJNyg8F4aKGxNIrQid%2BjIFW2YBLpCABXOqP8qvE9bTyyKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUEmGcRoAI8vYwvhUq3AP7qWYQ%2BEsK61MbhSb57IssSJqo4TCDxMxGRJYaG0gWqmiNFOeurKobu%2FkYELpN39jGuZDnkh746UyyllxphJRblRtPlQJeV04EVCSkrajgk5%2FUnby81iVdXxCsFzgUxoHLs8UxVTPl8K1BKVkKRLB1XbTjYaWcR%2FCNbVmxNOHTpuNlKpMTRYck%2F%2Bcw8cD0uf05RHPQ1iQr5hZZqo5xsvK6v22AX1BJA%2Bh7bXdnLQdGKPeE1oEH0lDX4%2FQIXoAmtCLsoqvHMBxxeXuCI9C4Np91%2BLZ6Or3Ig8Pg%2BPiRmSU%2BGYhIMC6Q%2BxV1b3JBUnofH82%2BabKOOAEJ3SHkhsaPjWwj4Sk0L89AiDeNX5zCMhO3eQ99c0V8diFUsZb3fZcGvVnXbqOceOZP7fMvhUeh6cMB4W0y7%2BSA3ezehHhaJ%2BCqFah%2BHTOuZ%2B%2B8hiXyybrhuGXXxvylOJgRZM8zm5J5fo3zLTocvbhBxEcVIVmEgWX8Y2ASQ4juB7RuG21hGda%2Fdx808JTVl5WKC35PV6HqQSvcB61aeZfERBaTi7vcBg6dl9%2FzvxPaz0ZzQCW%2Fy8xqo3KHydPD%2B%2F1InccSGwaEjArvpeHs33VfYfjYa7cIqhCvR6dvuycMzc%2BptFeLZDDmvcvABjqkAWA3ZofkFf8N1r1bIU8OHkLdujSmbmSWfh8T%2FVjU3iOU4%2BcRNrGrCZQfzfFFueP8Dv6IRgVLwgxeI7i0z1oYAQuhQlJecQVTj%2BOMl1CBAo%2BIyciMOV7xlVUkyUKDiQeO4wd%2BnNPDwUTSCwC0n1FZgzb6k0mQsTrx1i%2FIeTEB7uynDvX1%2FzWnqhdR8yJy9L4oLzZfPSeNgCTYd1G0aUjRrD%2FNrkhl&X-Amz-Signature=47a2f46824fc6c404137d14572dd688acfd6447a0fd348ccc016116b3425ff24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
