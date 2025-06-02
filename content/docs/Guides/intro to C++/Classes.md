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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYRFBCM%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBzO0DKBf3LcwDq4%2BPBW5xhqhlNrlOLub2UpOeiuCRbgAiEAvlIijVTv05I6L%2F6uuH4I7XHMtREJ8N0N7SDErwYPSBQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQvEOvViJrQJjHMlCrcA8%2Fa5lTeJNnPQgu8Hvkiy8uPdKEP7GN8QYRrgDoN7KdFPtTn8B7rOJQltXhY5UNGZiGi4RknUgoblXXJ2mVQKtZpqCAOTxoV9Puh1Sxu84Z55Z25MfJUVcWNh9MAEJzYjTvp8P7DwL5qkWUgb3Nnr2SJoRnrE4kLBdnBoPp5DbTS3MnA81H8%2Fk2g68Z5Rpnk2SPrQ0%2FnoHrPY3Q%2F6DcxViKiY83mmsvcTMnFCYRAKBYAbp70O7eXdXtHn6Af6LLzzayc5%2FbF1VSwuYjN9c32YtaJSR84RgZs8jNsF80k2ubfphLd1GXYCtdxoquoE0ORSqeXSh0TvJJQlf7bba08RgcgxiSlBvp3BYshk%2FqE%2F5eHsXyOSkOlkaXSQHRJyzD%2FvXsSn%2BlHffFMu0WVlxFJuce%2B0w%2B%2B54Vrdou%2FfBPMV5QbQxgQXO1rRKfLTUIIEFF3Swti%2F8%2FIM8LV2aYWDYeLNvCkGxrisd1zdJOz4%2BZW%2F6h7ukGgzgQDAP6ojXSWAA4pwg0Yw%2BFq1%2FfD86ut2UZrYiZDnJ1WhCsfWEYamZhqn7wufe%2BKVsCAYJHBff4YBVHjtH4DKp1RdnZBTHKsJNsNHgqxhfHSAZO7VQyQN0I%2FEhJN8DBzY0HyzF5t8F%2FZMJSv9MEGOqUB%2F07iO3RIAvGNwgvjonZ%2BlbJ3czfPOWYBahRuv9XUVfL2QV7awpoXL0y7tagZ2%2FOaBS4OSzL8cgUAZrlUsiq8uIBk6DkfDLUjqtYFZypSDFIBwUQwK4nx1B4bTGmYoijom5SI7%2BRLOcFKiUN8puJv9tlCV2whLGAi62PNI04jw433Wj3ywj%2FKsH%2BvNGE2RKnTjMUpUQcj2nPQRFLkeOtiMoa53luS&X-Amz-Signature=eabb9c954ebfc2101d9055a711a3444a9744623b39f01ba7b14d38475831de62&X-Amz-SignedHeaders=host&x-id=GetObject)

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
