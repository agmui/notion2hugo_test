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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKTY5TG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICCfBQ7FBxDn85pm89wogEUF9rP3yYDBwfP%2FR8wlNQb4AiEA6HiG1Ht1vCx748Gioju8XqZ6TXBpEzXG6MORAa2b4bQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW8XGnoNnaZ6ZU%2FyCrcAwFnCESSdTPoYO50EIEVzC33409qvYaYlO0JOXcNWsrrRjzIDLDLBnJ1I0iTAmkS1c8J3scepxRylqF%2BR%2FmwXgrJQybg0OYLsnlxIKT4xDR33bRBvWKeEaYCyJcj56oWGvqI%2FyethtXiewvox5SYtm%2FZk3j3aPIXcU%2BLUfQNpfXuYOPDYjPzaXGUXvM9MS70kkQpExwybxqTRJohobpRcJ2tfj5Wx1OPZBQOAm4dJ0BvTYLk4rp%2FA9HaltARVggVxknZ5E5p2axOnoO75xbRvhvblKReqq2P4sOAi8MRcwEs1NmswvZTbTNIVNHJE2HKURHAGJXTMC4FoJQvKqG1nTo4mX53DU8YhpMGDqHdF00g0l17BdaO0SG06WboB7b1Q08tI8%2BBEg2Uf8cXhvlBK9RBc2InIYBRR8x6XFIQ3prHg27o9GpDDu%2BmoxngLbX%2FlqG477XgqtPWxAkdgBTTUZc2ZYrx2jnDKUVnwwpfcYBT2MgOFlwh4n3DCi2f7ledqIKuYY4ZfJ%2BfS5DKSFYNP4lbgymkovLROQEsxb7q30tNIuUMUqMenfryv0oIGSsG4CwB3YJUN8b%2BjY2RiY72P%2FbckmZVLR4Fox7oXIhYyn%2BPg4KeOgyLMWR7hUIOMKLss8IGOqUBTFwLIaW08VeGlUXoyPDTE%2B5tFmEUxzGzjWGOroj6UR5hOKTFbeoXO00zqw4VRpIHF5n8tfkQQluESAsFBwevt9LkShx7dNRC4wVlGYxQDM3P%2FMW8wkjxG2kbLi8VXUNnaTAHRrnCoUzVIo%2FPbSQPyhySoKdF9t9t8UKoqWfydeo4NX2T0fOLw8Cf0DYpYaMO7ocUomA8%2BwFvlAbqTLrM6qyao6p2&X-Amz-Signature=853090025e1293a21ea51c086d2beaf3eb027a2371483680adf1008614870d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKTY5TG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICCfBQ7FBxDn85pm89wogEUF9rP3yYDBwfP%2FR8wlNQb4AiEA6HiG1Ht1vCx748Gioju8XqZ6TXBpEzXG6MORAa2b4bQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW8XGnoNnaZ6ZU%2FyCrcAwFnCESSdTPoYO50EIEVzC33409qvYaYlO0JOXcNWsrrRjzIDLDLBnJ1I0iTAmkS1c8J3scepxRylqF%2BR%2FmwXgrJQybg0OYLsnlxIKT4xDR33bRBvWKeEaYCyJcj56oWGvqI%2FyethtXiewvox5SYtm%2FZk3j3aPIXcU%2BLUfQNpfXuYOPDYjPzaXGUXvM9MS70kkQpExwybxqTRJohobpRcJ2tfj5Wx1OPZBQOAm4dJ0BvTYLk4rp%2FA9HaltARVggVxknZ5E5p2axOnoO75xbRvhvblKReqq2P4sOAi8MRcwEs1NmswvZTbTNIVNHJE2HKURHAGJXTMC4FoJQvKqG1nTo4mX53DU8YhpMGDqHdF00g0l17BdaO0SG06WboB7b1Q08tI8%2BBEg2Uf8cXhvlBK9RBc2InIYBRR8x6XFIQ3prHg27o9GpDDu%2BmoxngLbX%2FlqG477XgqtPWxAkdgBTTUZc2ZYrx2jnDKUVnwwpfcYBT2MgOFlwh4n3DCi2f7ledqIKuYY4ZfJ%2BfS5DKSFYNP4lbgymkovLROQEsxb7q30tNIuUMUqMenfryv0oIGSsG4CwB3YJUN8b%2BjY2RiY72P%2FbckmZVLR4Fox7oXIhYyn%2BPg4KeOgyLMWR7hUIOMKLss8IGOqUBTFwLIaW08VeGlUXoyPDTE%2B5tFmEUxzGzjWGOroj6UR5hOKTFbeoXO00zqw4VRpIHF5n8tfkQQluESAsFBwevt9LkShx7dNRC4wVlGYxQDM3P%2FMW8wkjxG2kbLi8VXUNnaTAHRrnCoUzVIo%2FPbSQPyhySoKdF9t9t8UKoqWfydeo4NX2T0fOLw8Cf0DYpYaMO7ocUomA8%2BwFvlAbqTLrM6qyao6p2&X-Amz-Signature=5eeef6ad3e8275852e2977f36fa707ba09adfd403d35a4d3d7dd9d1412f0a53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
