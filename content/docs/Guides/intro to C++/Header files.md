---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZXUY4C%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFSIvc6qLlqE1URoOG7Yrr74QLSZ8In%2BFj3id72Khwc9AiBwNRyEzCQvnVgP%2F8PAG3FuWd4jYjya%2FLZAVh%2FIpd2yMCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSGt%2FmKz3WeXxKxNEKtwDH7LufAzmVq%2FHc8kK3jXVhJHW9i4U0torslYkHAlUG1exB3FrmxF%2FeOKT4uzOP6bVR8eCNzR0OBKEVZyt8n4DJokZ%2BiMTQlnEcf3Tit2K2gqznm1OpMGC63cn8mb6C5kNSNT82o9QMf9o328LQtD5wtjAayj0pLlt%2BRX%2F3XioH8RMbB%2FmxaCMjm4F5q7hkGHeuPXi5nucXzYVrQzlOBA9eVdnOILhRjGgjX%2F6jPwynWuVXkzClsrsk2vEwNcpAljNv9U1tybTHk5dX%2FC2vsBvRKAW9wmiVUom7lQ5KGlNlbdewsSukqCCew4CH9PBLz90Uvj7eClxonKRw8og5SBJbygSwg9rMgZ3ZUD4GLI3Tj8MQfNgVsAAOankpjZmPUk2xDuIOiKt2c0vJxD4b83PgguXQEEUhgoNd39yPlda50qBhqATIH%2F8R9ojoAS%2FaEQ2bNcMW8CPeexNvr7sQzQf6Oh%2F7KVv%2BjeP3KYCP0sBf6KfovvIZ9RzoW8%2FIvjwih8B0qpUXNiJfbieLJznQ8Bgm3ulwa0HadfuokraIYKPUfitIbJPwAXJ9gHBGs3g4KZ83zsOn5LXOYU%2BMBOEJVanhu326W%2FSFesSj7x9ufwvH2RzmMYmRwKTlTmsxUcwsoavwgY6pgHpIhQO4JZrQK1lcmNB9R6WOJobVLU8j0iKd1991hoqP4f3MXnfCZhzvPjJWSLz0VXMQKOhXi5%2FgOHclG2MMAr6AzW7hrTs0xSkLe2VA%2Bc2oYTJuiUD4pirVkB4ePpD%2FH0YJ4nzvUlWbkBpSFczPhOOuUKckXghbWRPJDjbdWs5WwRWO8TBfJSO2lXz7o0lVVdGpiZGKWyp%2F6BfRhGGnOq%2B%2BOWeefRY&X-Amz-Signature=bf906101029aacd73f14ef046e566c838fd29343de1df0fd50966f43503cdf1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
