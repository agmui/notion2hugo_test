---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLSODTR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFJnaJpQQaMwgAVGmDak7edfz9j84zxCpbf7rqfQYH9rAiBxHyLeWSJjW2UY1K5Yt7%2B90YypqWacxX1gfgPtvPZL8Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyyQzNLIh1ViWHYPCKtwDt2FEe4JocSxLc9kjMAKLnRbm8gBoqWgqWCuvgzWnZZgwGTFI2Y3IAgiufW7jxZCX9ctnnFDH1DAJvYWLa9ELCYS2QghvUkhnjTdZeBW8LYywKPZyhREFlv3fWWe8ygVQ%2FanAD9jEfGUXJvz%2Bdjdro8iV3axjdrp7lIZgwAyAkyx5pxHfML9I4ENR%2Bni3fBTNT18uKcvwp7DG3TpmznRHmYAZ1V76rtdU3if7buzORXfvIsmRzGOBSd3bgDxwUORmM0XFnG6vZRxryIayY1Qx%2Bc%2FyzSr5r0pSrXH60I02Q9iwHdTagf90nNDT1hMfSOzgol9CrqR%2BZUL%2BQRQ%2BuzV0EtUO7fQvb0BSwUSOEF1C0fr5j4ilfOtiy73zSt7SqXg7Vij5auus1%2F70bSQJtq8h4v37XVgE2xauu%2FRbY%2BGyJUuhMSZYadW7np46wq5G5bCAeNfOK6h4PyMKBrae7aXpma0QIbu%2BiVNiYx4mvZKP93oou7mbA1MLatO%2BhiEL%2BQdftaC1PNO4THtC4ut%2BHzXJ0sMOLVPY8C3sZc8hCzqU0BYwxy3rZ9gswuBLRDrzRk3LRri7vb%2BtOygI6t4OEJll4DOEZjEYLzloGTL%2FDCV1nc5M0aqEFFFnDw8r7T8wuYS6wgY6pgHZXg7ShzeCWd2aYLSACo0BwB3EJ7K1%2FYOViZtg0U4kLmjQesw8hXiFkIjo4zYDzsUvaxnGfjF660IZxwd7JZo4hJdhh6l7JGbvdtXCc1c%2B5RECuDtAnxU%2FshUQHDFIL%2Fot89k78bKdoeFTWbQiW7SPXiwPNQmOGxx1xYiRpHclOp%2B5ksCT6mkm%2FDbE07oRyQge%2FYpiQIJ%2B01yiyGT89CcfE1DxGQ4m&X-Amz-Signature=14c839c5ed8f7acea8b20fada368779884bf355e70a6bd9b106bcc9b798b625a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLSODTR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFJnaJpQQaMwgAVGmDak7edfz9j84zxCpbf7rqfQYH9rAiBxHyLeWSJjW2UY1K5Yt7%2B90YypqWacxX1gfgPtvPZL8Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMyyQzNLIh1ViWHYPCKtwDt2FEe4JocSxLc9kjMAKLnRbm8gBoqWgqWCuvgzWnZZgwGTFI2Y3IAgiufW7jxZCX9ctnnFDH1DAJvYWLa9ELCYS2QghvUkhnjTdZeBW8LYywKPZyhREFlv3fWWe8ygVQ%2FanAD9jEfGUXJvz%2Bdjdro8iV3axjdrp7lIZgwAyAkyx5pxHfML9I4ENR%2Bni3fBTNT18uKcvwp7DG3TpmznRHmYAZ1V76rtdU3if7buzORXfvIsmRzGOBSd3bgDxwUORmM0XFnG6vZRxryIayY1Qx%2Bc%2FyzSr5r0pSrXH60I02Q9iwHdTagf90nNDT1hMfSOzgol9CrqR%2BZUL%2BQRQ%2BuzV0EtUO7fQvb0BSwUSOEF1C0fr5j4ilfOtiy73zSt7SqXg7Vij5auus1%2F70bSQJtq8h4v37XVgE2xauu%2FRbY%2BGyJUuhMSZYadW7np46wq5G5bCAeNfOK6h4PyMKBrae7aXpma0QIbu%2BiVNiYx4mvZKP93oou7mbA1MLatO%2BhiEL%2BQdftaC1PNO4THtC4ut%2BHzXJ0sMOLVPY8C3sZc8hCzqU0BYwxy3rZ9gswuBLRDrzRk3LRri7vb%2BtOygI6t4OEJll4DOEZjEYLzloGTL%2FDCV1nc5M0aqEFFFnDw8r7T8wuYS6wgY6pgHZXg7ShzeCWd2aYLSACo0BwB3EJ7K1%2FYOViZtg0U4kLmjQesw8hXiFkIjo4zYDzsUvaxnGfjF660IZxwd7JZo4hJdhh6l7JGbvdtXCc1c%2B5RECuDtAnxU%2FshUQHDFIL%2Fot89k78bKdoeFTWbQiW7SPXiwPNQmOGxx1xYiRpHclOp%2B5ksCT6mkm%2FDbE07oRyQge%2FYpiQIJ%2B01yiyGT89CcfE1DxGQ4m&X-Amz-Signature=c608190b15b6327142686836f6132ba62ad50683b562be163c1ce5c961f08fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
