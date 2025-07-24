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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=47585e28388173401408e95392af3bb80f2b6f205ffd650035b653ee5884b65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=1af0b77c33dc953895fb8a101ec1615ffbbb96bb984863cb2e8aa8d9ef965c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
