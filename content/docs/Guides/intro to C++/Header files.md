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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTYLNJO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2F%2BR4CcSW7W9FxEdGkf01ejZ0%2F%2BQwoocpTDlkNzMFJTAiEAu5%2B1VUyZzlVfUrwaX8Ury6U1kVL9lb4%2F13UrZf2YFYoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCrN9QbX4IlFWGYAfCrcAxqDjo41b3EdPgca6ROdGZNsM5Cv96lWqT%2Bw18YndneauSq4ur8KAYY8mItp1%2FkpkN4xipr9BfGu5%2FJdubsXLU751Y%2B24GiX5mc%2FTdcuIXP8TbOE5bU1Zo648ptUqjp1RGoMCAIM0job%2Fb5G0kJTm0N53hJwD68xNBYxqkacBkVkJDLa8I66gsCXW9ul44HdJwNrvBr%2Ftkj2OsxD2h5SV2DYYwwWG%2B3ODNYDjDX5n%2Bzn7DtCdoA5mqx7ZBVc9%2Fi8qa%2BQO3aHmKeu1sEmQKB%2FLS59qMrY0VjJCD7h3gwUsUbrtpm770Tt8GYuMdOlpZgjkzpVScBQLVRUVlGEfbDyqHu264NFdtaJePc5%2FyhWZeoUXCWZpI1sYyOGyrcidosHO6Y4bg7CC9UVA8btCoa2THgBrmetlSESe7XP4aAHv2QFf3DWguzBWN2Gjabho7v7q1cOKzyyg%2B0I%2B39hjD%2FLyQGuhIhJiZ2C4Bn61wvPdSkIxn4EzCyG50hyPgu4glr9uqxhSJ6KM%2B76RbDs6u7jjH28nC3Qlyl%2FJVLWiikips%2BuGzH6eqTOcT9K10SKVH0ogNJsofrCUABR2AAUV%2BMVEy5DdXKn2CLkl52SJ9lX7cJPxRSjlprqG8eEo6bnMIzkrcAGOqUBre1Um30TnQ4fCUh0lHZIH87faH6HMhtqOSrUA8peSLycDqEStK5AC2KbylHuLgdHcGEhk8kJVNWAM8dNrNMZk6i69aueZw3VeEOIbOlXoxGVjsbMNqKOJQHRzOUm3dbZH7rcgDD4WuiqZM9zO7xA89tbtNDt2R%2BIKZ55Cg8gY5IHUk0h1iXBysiyOFSENrDTx1rWeP7SY9vh8xXW11Gf51kf1qfh&X-Amz-Signature=264418c6a2b22f8d9b3c601376c4210fee30cd70416b8c581ad38f0e74b92ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
