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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y644IAVT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEp48hZbCLFeQCNgyWGxVvZozjBUvJnkIeMcpkDUvnWuAiAk1MxwDwGhqsHUdF1HKBKqSnzOPIcaX%2FkUK3RPTc35kir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMnKNO44vX4Hrs2NTTKtwDGFUvKJ9RWmOKGi6NrNn8WYK99KwjtzQad2LdZYyyBTZa7fSNiSQbiX0qOBZI19d4iMIeGpG%2BWet4uLO00wrt%2BtCKJQTf8Hngv4YS7Ysi0poRQ8A2%2F0q5fHTpcfapb%2FymSa%2FzFmR9O6hBXZEgQDep%2BOPegId4gdTvNfzyVaIXTLvlrsrXgr0R6l31AyaWXFS%2FgFEsP4xI%2BVIew39s34pRJv5ld6FW2RFSy9PFT%2Bf93HtuLt4q6oTAbkkQKbvcVPt8O3pQef5cDBBcNb2Wu4CrxK%2FAd%2BX2fMnwl2paiP%2FK8zru4uJTPqsT3L%2FpL6naJywHsuLst%2BprrAdYi5BUzY42k45qcWbNMXFU4RQqzaPUs221Rdpc6vboG6BM8uDdzqyENwqpD95Zn%2BCbkwiUunax3cO2TY%2F8z9zM%2F1AocGbxZa%2Fnb6E9fo2Iy9fkiFeWa7xRKkIRSvhR0QTD%2F1Sgo96cQN9eXYdFi07l3eFEK0ugWyAReIezBw2tVwvFTPGHxtQ5upKd6NPExGxMTYzm1Wk0LepVnAElve%2F8ambDUetB%2BTV7xwHISTA7OCZFMQ0FjJIcEIKFCa38BeQ%2FB8dyeGlQFEzAA7iSOHfgbjBfKLMJUKGvxnYrHHJ6rN2OrMUw28z6wgY6pgEn%2FKz%2F74G5djIKdUDFzGm%2BT%2FT4Yj0p2wbFtEC6lFaFWz8UHNTUiLV0sorYiy0e%2BB6lal3TEjDe1DHbLCWu4S7xLb1jG6F0%2F7cbwA6VAMxe%2B2ZBjjdetkE6MwaVLXib6nTYdIo57vaA2H1z%2FNvSdKSUBj5c1Qsp6AaF5il29M2gGJF0ZKmNtkQ2B5O7O4j9DLcJ53f7e2Npwx%2BbxzoYp23zwbS1khzX&X-Amz-Signature=d87cf741570e6e46379442d4d6896400a853fc9f96edacf84289948c8681bc60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y644IAVT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEp48hZbCLFeQCNgyWGxVvZozjBUvJnkIeMcpkDUvnWuAiAk1MxwDwGhqsHUdF1HKBKqSnzOPIcaX%2FkUK3RPTc35kir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMnKNO44vX4Hrs2NTTKtwDGFUvKJ9RWmOKGi6NrNn8WYK99KwjtzQad2LdZYyyBTZa7fSNiSQbiX0qOBZI19d4iMIeGpG%2BWet4uLO00wrt%2BtCKJQTf8Hngv4YS7Ysi0poRQ8A2%2F0q5fHTpcfapb%2FymSa%2FzFmR9O6hBXZEgQDep%2BOPegId4gdTvNfzyVaIXTLvlrsrXgr0R6l31AyaWXFS%2FgFEsP4xI%2BVIew39s34pRJv5ld6FW2RFSy9PFT%2Bf93HtuLt4q6oTAbkkQKbvcVPt8O3pQef5cDBBcNb2Wu4CrxK%2FAd%2BX2fMnwl2paiP%2FK8zru4uJTPqsT3L%2FpL6naJywHsuLst%2BprrAdYi5BUzY42k45qcWbNMXFU4RQqzaPUs221Rdpc6vboG6BM8uDdzqyENwqpD95Zn%2BCbkwiUunax3cO2TY%2F8z9zM%2F1AocGbxZa%2Fnb6E9fo2Iy9fkiFeWa7xRKkIRSvhR0QTD%2F1Sgo96cQN9eXYdFi07l3eFEK0ugWyAReIezBw2tVwvFTPGHxtQ5upKd6NPExGxMTYzm1Wk0LepVnAElve%2F8ambDUetB%2BTV7xwHISTA7OCZFMQ0FjJIcEIKFCa38BeQ%2FB8dyeGlQFEzAA7iSOHfgbjBfKLMJUKGvxnYrHHJ6rN2OrMUw28z6wgY6pgEn%2FKz%2F74G5djIKdUDFzGm%2BT%2FT4Yj0p2wbFtEC6lFaFWz8UHNTUiLV0sorYiy0e%2BB6lal3TEjDe1DHbLCWu4S7xLb1jG6F0%2F7cbwA6VAMxe%2B2ZBjjdetkE6MwaVLXib6nTYdIo57vaA2H1z%2FNvSdKSUBj5c1Qsp6AaF5il29M2gGJF0ZKmNtkQ2B5O7O4j9DLcJ53f7e2Npwx%2BbxzoYp23zwbS1khzX&X-Amz-Signature=c2bdaf4d7482e8cd65415193a42475de60115e3d96c20b249ac3477b447cf9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
