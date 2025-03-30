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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65T3OC4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDHfJCwQIvIpLAPxLIo%2FifyiG9RK7zNA4Ac7e8QnJYD5AIhAK3z5OdMIIV%2Bx%2BINTXHujfN3OqcS0AGz%2ByxiBm%2BZWwFCKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxptZ2ylS83sAMS5osq3AMFUozIUuQYKcQHKZYEwGlo7WGhuRx7aMonDgqHa5O8KqIJRG4w4aqqmnXoijzS4IJdWCVfyo9d5kDR%2FlPO5hiNeRrFGGXH4lt11ZA06xZ8kmZ5DBLMaZLrv%2BKbU5BP8dk%2Bn7sICMNCSud2g72S0%2BH9VP2ar6OkIpcTkjMIW4fVJrwyDZ7lfU7Q9HyRJlAQURdjSLXv7AhFyP2wP0oEIIi9GpnV%2BWd0ZpIoAX4XWiKWSTk3HbeJdsY9O3vjcN%2Bvp5NKaM1dQXAiB%2BJdyHOoIOla4Qb%2BRG411kIkHj4hV5OLrOXyPhcJBD%2BGSyVc0grkUgJWLO7YB%2FpZn99lSeJIAsmOpduxFHGC2aDxqGqeaX9NUZqtp81pXVEMkkewGuPdS41SLtLhf5SHTzEy5Etd%2BJz3Tfo7%2BEFS72xsRlMvlq3XiuQ4ZFZa8s5xb6AVbNPah54w6j%2F5AmAHN3YaFEliZdLjNJRZ46LRIWACyZkIaezLxIuUtcioQ64eSNg8M%2Fg9QebODU%2B2R0wtpkdyg6fJ%2BubwxP5WxAUTj5cVH6a2SLZAw6i%2F3rxxSDGDOkT3qU34xet82SxMTQLfEQ5gZjJAf0%2BabfShxbV5uq2iWg3LovjXrYt3UQXfYtvo627BujDt6aK%2FBjqkAd%2FeNX0wqnqFathIjkGWp0GO%2FCwwDwp%2Bc0%2FaaWViuCZVRGMERmJjkpoVQT8D%2Bn%2BeslTQ5tbnpK%2BIHrTfLw9S1CM9QQt7TbxQWAj3zjtvzt42buhnWi29yVJE2MQZWuXKp6jGTzQJsjHpMmJ4Wwnw2GMCufHE2IUKwSXOqCshNdtxt1b%2FJSsty55hSBkaiDWtXCDIo187h8oMoJbIVMa%2FmCyzzVXL&X-Amz-Signature=accde242c15af76249e07c838054cdbe7f81fc857538ab83f143e7289097b98e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
