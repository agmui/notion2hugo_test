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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD2X3SEZ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLOSJ94OwoJshK2pLS9nUU5h2adbZMF0iSS8SEE77QlAIgD94%2BVdhXaQktUwfxM261lD7xp9Fg%2FY%2FvXITTHEanUj8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFTwjpir0cFqed%2BFlircA0jeAKHG5GLC8OKOKvNr4tF2yIliYU3Qrj59hcAu%2BFUPKp2GrCxlh%2FrZh5jmz89RwgKeE07XxkadA7TpUv75BPspdpNcG%2B7p3EeyC9dcQDWfew2lPUVCNQCM3W8BkgAJ%2BBi28P3W0SNcwhUsZgmgOKkLO0Rc1nZZGecdamafvgpS9%2BdAEJ4FfbwtD0B76J1nY88rP3sp81OMr8o8FnRrucwjPyAdMxmZ1BzPQ7pJBEgoPy0Yt5nkv61ggnh%2FZg%2B1UHIBBJNMJ%2B%2BaAxZEy4c6yp3%2BAWvNCMgU2XraW4BY55LnB3jfPR1DH7L7I%2F1urVWEdilIzuah0IOoLLwe14DrMg61Q7Os9fwT%2Fqgj6UOjUyFlz42hzewQoG4z3VqiUfP3RMj4aMIlR%2FLVq09GImXC8s4n3550LxzFKIuzjc1KKCGGjqJlJaZ73jAhtJbpG7MVhMQ0EelrH0JQKPZdmmw%2BLB%2FdFPJNq1ZOya%2BJtrp3ObS%2FjTDsOXNp4hbMix3TAXfxhmBHAlwgJTl4%2B4aDXA86STvVySVfksQQvn4g0LjM5e5NPoKVqSroMyhFr7jzw%2FWd1NXQzzGFzbkWlQkat9WHfndhKYtkgakYq8ZUVupvrMAQP77LwhIDniNlALSYMP3s2dMGOqUBafBmkP5%2Bdy3CI%2FZjVIkTj9%2BfIRcRljUG73hrSDjhkW20NgVHgZBE9xxYe4lq8XX5Qi%2F7svpa6nG9cGa9MEr2rPfkK5PfFuH9YIemwszDWLDDLNzreXIGe6Str9zOXyrGKvh4qLRzl%2B813VTFzA2%2FyGBjT2YLvsD0u0UHPC62g5geh4lewt0TZwXwlIgbsMrE4ws5hwWFgZ4tiFwFaBYm3PV8W0uK&X-Amz-Signature=1f7a311877236ef04bbafe1148838d8098266cb2230b59071cc4df7b06e7f695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
