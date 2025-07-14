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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFWTAFG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICeZ1GY5ahHRnWYZJ%2Bj63GEgeN%2FYd4YpSXQMEsXUIoNgAiBt3V0i6%2Fl692GjglT3hFvj89r2xoPgvnz9MD2d2%2BWETCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMj9urG70e59GQWB20KtwDmUuLfcboutWKVD%2FeE1rhadmkdGeGg8mgnYG8TpbhTvwHTTIN7msEy2r9huvRByr1lqpA%2FG9rKvTUbFR%2FXMOpER1pZgYrYEDZ7AHE%2B4JKp%2FL3qOQ3SYnsdlJeR7liTDdlqWbmZjD%2FQQojzjot%2BBUFQdCHAU7SICxvEVFI1LQNhfqRw%2FRQg41cFACCQOmB7KQ4eqd3qxYKRrjZlTfSDasC%2FgZLn5P%2BcHsoIJm889Qe%2B21z7u26W5lGIjj1xRM0cP2%2BZGYIANRSBPC7070YcG7P113h9ZFYnkOGj4tv97Nqo1Vp2ipKd6l6JlfnzQypWb2h%2BegQY%2FXxE%2FXngC%2BGQ9NNp5lVSTPeW%2FaBW5We4I%2B%2FCUcrECBeUcqJ13av%2B26DBAqXlkMDGt96zLTFuRB9oCjbpZoaVcJnVaeemBluCbB8vkLpVXXy0o01cfOq0YyUfLmq8EerFfES7e70EeLM1rJitlW6yUMow8AyO0aixoNuhVugHmW%2FqzXqayhbd7KNzkkDkt2pQOBYnXdSyzpCn5Va3oIXDZb8nDvjQzBSEpHsAzHE6mOz%2FqKuWOQ8ZYaZwdULgB%2FVVeGRvNmLLIHu6xtqBB6eRN91B2JhLM2ZKAqfqdvZDqN%2FSfBt2efDB1MwgtzTwwY6pgHQmz8gRV2AjKejxdQFGtOdP6%2BYXmTeRar%2B77R3icyo0w%2FusIsNIY%2F1pSiM3AVvq5r6BxAn9VwLK9soedMKTTNpiCr4jFQwRR5lU90SNlVnzg4ZZAhLmpYzK1gGY8Tz15Bn31JaEhp1eddFfaIvIB0rA6Echw9G4c0%2F%2BRl2S9bMqGT62U8xUIA9KMsN%2Faw7qmJkjBIbJZyqczZnkOGH8eLKz%2FtNko9d&X-Amz-Signature=0f5d4f02d07cf0597be61af40012439f37397937bcc2c576d0fcc6fe768ea187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
