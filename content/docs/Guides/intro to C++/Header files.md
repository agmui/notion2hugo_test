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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GCRFT6%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMiC0EC3kIufDsAW8fpytnPDBKwCnIqKcRgnUGfAEsjAiEAktmwszjT9D42RFzVy6NfP3Ov79YLQpzYXQDgfX3XbIAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKOp0HPgZiXzDnrNircAwAYYkw3QOxWmZxMDfBv%2FHGG6l0dEb1QfS%2FBTX4XzkiaoxRCbYkkx%2Bq3o2%2B5Thj4e3FbDEcnAI7iWArd9eyGf4HXQsnop3sxgSc4fGR%2BtUxwQGLc64kt3Y8TDIUze8YFUjgIrbCNCUdMtIXiXGZpk1WFrdDjHzUfNZ5toHEEax5y42P7rYsrdmiOqwNKbH%2FCXzp9fgQqO8KkOz0amV9jC7l7lWLbyUVnPOANdPypEukA%2Bb0fH1lExIMARb9PaJ7Y%2Bp5wKB9yumoNf9FquievA9Bx1vjyWfTTaFBRg63d%2Bj4ShWGERAI2rQINjv9e%2BZX4vJNF3LV40u4E23Q7TLjsuh%2FV8NTBgTAiewQqx9%2BdPJPgc%2F5ERSCycQfE0oBri5TrZAfsQ2qqr0nvBhOzWE%2FFe6UvLmcCtf7DIMvzJX%2BM6i7ag2b4KUq9fTw9q1crPofGVJg0bRs3%2B73xDRG%2B2GWiqMZlE6lzSXXB1LWlkwYX4NOC6y%2BpgYcAmaYcXhNsFlMKlSBOOUWj8SNK39koli5VWAGQUHEJ2k5anT9cOpIbVzuyZNtxMkDlX4RM12CGVPZkvzKtMgQejmcxMBT62kD1dvX%2FiER%2B64Mezfyfqh%2FQGUmmkpm3we%2BniuXTjRutMNfEkMMGOqUBk9S0pG4qLLaNYUHCEFqBmrM1vTgl8WRwNES480VVZ9xY4Jq%2FytgRhf1rw4Yvf9PgKhYOtJUkhTi0vh%2BwzHWbfu%2BsqQJD0yv7CMe26PUT8Wrlcgh5COWq%2Fp9rqQywezbdC%2BUI9%2F7sNzJ%2FxOMj5YssvXlvb4pSGRnY3hp3%2Bt44kvE42OZ5721SDJkIpaQpPgYYMqCGl5%2F%2FHNNEJmgbi6kkJcQ82uD6&X-Amz-Signature=71e20331dd630b476573f6dc8b11e7f60956ae1716c4a546ecfbbae411d81ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
