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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7TMHEK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCwlfViLIza%2FnlZ0iPjbo%2BRzqGD13LJwMQNmsm%2F0jCY3gIgNbRnqiNWF07r4w%2F9CBZ5UUtHRGlk%2FLmChEikJSjPmf0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1FYyL5CGIeND4hEircAxJmrz2Y9DkTenXwNqvoukjDjGChNrbZdn1r%2FOuUQ5yLAwK%2FTsPbdrJRuc9cUqK5ClMxESiW8NSezvP4ZvdgmLR9P65t%2FZfYgdGDu37ZzzviXIaVs%2FXDf7WbpGzbyihTH8L3gr3sVljoSHVOjKsviqX5EpP3bvnVouNfqZ4rJUr7Edwp51loaCBS%2B6%2FaQQUur%2F0l6f5knExezuYCw6mr1%2BJBelzRtGcjh8hL2nHSXOHkBZlbgCjf8kL3FclbE%2FRjkPxcbaBxcvFd6fFXAKaMYZpVa3NucYFWIDz5Zy%2FEYXJ8G3Ab9QH3GECe1MzpScly%2Fn0m%2BCUiImz5rsGkS3yuvL0t3DDXX6SSeS5gp9gwClXGwJ0G4WQqPVeuLxak6yMo4ylTdUWqONhktsSehq0WmB%2BdgntMay%2BKZcTj07PLp2sA1iZIFFtZ7dg0ALJQq0%2Bch6p3azIqG99QvGVhgqpHH3oBLocgNQSEDe%2FgGNRCUl0aTsVzEpb9cCs7fN37uuA22Ads%2FrifvCqApZlm0nIa5JgS7dxJ6vvweQuR14iKzMjhgVth7b%2BrvSUCejk6rl125lO2t2dn%2BFEPI7%2FVg0kjTbomdNrJXtA6A0nUvvYGZq7MhC1VTT0z3BkDZfpJMPGPhb4GOqUBUbv9drHJsn8NR%2FhObQcmz1PnlVAYXgCbNU89DgTDLJaHSU0nlJDJB%2BGy4xOJNriPL8rgFNbRXMrJzVIDqvktBBalVwWothd6whZD0JWF7e0gSODd4V7XqAyDadUGdOKRCgNwPKxFazf1V8IQQ6CoVUXFs2sVxtth8ikVod%2B8CaRTWX1iDsfH7ZIEmSBrO1tS0rWnr52Sa1OavoD2wbCgyOViWAia&X-Amz-Signature=40ee1578fd65273f33d1d27067951d1144db4e57a7d50d40363c0742b9146c30&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
