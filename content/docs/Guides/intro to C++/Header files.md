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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RWPEB6U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCUxF%2F01wzHh1U2jjLoAknGATtrk00uFTo8R0xceEk0JwIgJyWju0Gs%2B9TxaKhKuJ3Z6ow8zIzPnrvSU1HbTyFp%2FT8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLby1P1rghSOEnvrJircA1cEjT9Ip4jsQFpbaG4qBOaKX2CBIBM22D%2FRB%2BzrS2V%2BnWDLe3n%2FNYKjIlLxrzsSH0FwI%2FIincGNk6oJ0%2BBJzx%2Fft%2FUMO19c1BRKMPr1V9CjrfHlDdqkj6dsOcTn%2FwgdqhkS0hx0x8p96qyDdzPsK%2FgM9qJMB6R31jTZ1mSo14gXcKMfUjIsNhtj%2FZilyUzJzbmKjz0rwXv1BtZgulNnbCbV2NxgbQoLUPyecigiIuCMPY%2FwSaHpD7ovLVWgbmdUXulHHK2eMhe%2BVC62b8EwOyAKGysQJ%2Bu7nlHX76SlW%2Fzf7%2F7U2fzAyRMdWRraYy%2FQHpGxnXMx4szPQvwTW7syjLLYDPYBMhwn8GF3U1NzP8jD0NwtPqdLhrF8wJmlxvmfBGcOjVM45F6VriWX2Od7fiA%2FJfQNiHCtYqFI2dgqPULtggoZQk8tdLcDsRSorXo8KtK5LatXajYVjoyeJ9BxONrV04OhQaonTMRnOxWbxZXkPuxbtW89vWd9DUBwg%2B36AR5fOdfE2EAXOF9umAHzOvkdoFEGiUGeT%2FEqfHO35lrmgGuytCSbF6%2BuST1%2BMOKanj0EMukadeVwUCqPKLdBSEPoy4w7FXLFzLspO6at7nwnsxmPcHzTUwCQVv42MPvqnMQGOqUBMM4hYvMgD5dj5oxHp54SUOG4GlcALYtLQ13UQaudQXVM%2FYzbWPeSqqC%2BklRw%2BOeYbQvP5NeYbFjwzreHe5xHE4MTIhA5CeE9jaaClnKJmUzHtxppJdOJgZO1KuPu1FUUSqXGmJYykJe%2Bdqlo%2FoSmhhW8uAYnlC%2Fyjpa7vhx8NJbhlaZT%2BznRT5UdKsyyLxtPtbY1TBW%2FzYJV9e%2F8cOJNqxOXuBNV&X-Amz-Signature=171dca7d45c749bed94085d6fec4e035ab70b333d85b3c39a9e7676529cd711e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
