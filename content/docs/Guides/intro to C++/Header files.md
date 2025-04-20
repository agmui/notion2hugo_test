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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634T5IHKJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDjFG93V%2F9IETbmYJwFzjMTZgrYrEpc6S9hyUyw4qumpwIhAK%2FjJnQuCXk6jv65vco2cjHHfFAIkAYdbdxI5BBmPl8hKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVCrW9lfK%2BBKDU8loq3AMGFXtNjosGkUCIXUT74NshDtyjCUQ2PY0R6LN%2FSgYZ2YTB1DiO%2BcKC7gdN5EcI6pWEcZRqYkhWqg6UtPF5m112HINzS%2Ff1KZ2zSFStbw0DynuzA%2FmWH2byppMjOKVZUx9dSG6GkKSZf4vG1bcFib48OpFrz02tg3O8IGk2PRaKJb2lI%2BNmlcGxB7CoHK6SSsqqE32Fk1%2BPf4fmXRcmVQlQerKxrOduzFBlvbO46RFgyzQlRSjpO%2F8VLrNnEAvQwrZ7gVpc3parENdFsmBusaaGiRdYMbqQ7afo4nOxH8PmtTKTeydtlm9UOyaGylKFAjMaNgdX2k8A6csG3aq6tgNrnhIeW0djpPzGTmOlbyfUP%2BlnvoEkPgiCM6CYJGAuFVwZAED3PC7iBIiupQBRcQtSWAwlX0PqvmPLGBgSj3aKzyV%2ByOL44VtLo5t6pkpgcYHWOORE%2Fvmw%2FkMp3mzyZcliA56P9odgU5or0nNC0bkfyUiAqb7N5H7uuLGBsNmUeN%2B9pzJ0lJ3ZkeDEevLPBML5dFS4EX0VE9zMne4sIHYLJueSDLw8gl4uUAX69QrFgb%2FFkmOJRlDUe98kdT9GiW7EGH3pr46AktObIM2f9WoNJ8IZnExSANSyupKINzCL6JTABjqkASzRX4SvOQ95XPmC4D4D7rhSeqAOiOd7QwKjRT2XXJzhW8%2BZ1n93B1J46%2F38Tc5K154FX8WEZ2xM4NBiRuyfbgT%2BiNwRxEIvFZzCNaqGjKy2XP%2BSdzMwEv1hDk54MJMhpmwvgUXHwMzCt%2BEoRDSz9d62iaudWdlp%2FLPTRkjW1vMqWP2c2P%2BBCCV69z9Cv1QF9BNFZIDMZw14CcI435KUZuonlmTx&X-Amz-Signature=a8acb42c1bd7138c347ce00b2610f0eb7da7a0ca4257debd57410e1b45d3324b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
